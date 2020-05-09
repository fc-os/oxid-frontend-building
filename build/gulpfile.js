/*
 * *
 * @package FATCHIP
 * @author FATCHIP GmbH
 * @copyright (C) 2019, FATCHIP GmbH
 *
 * This Software is the property of FATCHIP GmbH
 * and is protected by copyright law - it is NOT Freeware.
 *
 * Any unauthorized use of this software without a valid license
 * is a violation of the license agreement and will be
 * prosecuted by civil and criminal law.
 * /
 */
// fetch command line arguments

const parseArgs = require('minimist')(process.argv.slice(2));
console.log(parseArgs);
console.log('project: '+parseArgs.project);
console.log('dev mode: '+parseArgs.dev);

const config = require('./core/config/config')();
console.log(config);
console.log(config.baseDir);
console.log(config.getBuildDir());
console.log(config.getSourceDir());
console.log(config.getDestinationDir());
return;

const taskDir = './task/';

const arguments = require('./scripts/arguments')(process.argv);
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const svgSprite = require("gulp-svg-sprites");
const buildDir = './';
const generateDir = '../out/';
const buildConfig = require('./projects/' + arguments.project)('./');
const buildShop = {
    name: arguments.project,
    outputPath: generateDir + arguments.project + '/src/',
};

const buildScripts = buildConfig[0].scripts;
const buildStyles = buildConfig[0].styles;

//dont need global
gulp.task('styles', function (done) {
    buildStyles.forEach(function (oBuild) {
        gulp.src(oBuild.input)
            .pipe(
                plugins.sass({
                    outputStyle: 'compressed'
                })
                    .on('error', plugins.sass.logError))
            .pipe(
                plugins.autoprefixer({overrideBrowserslist: ['last 2 versions', 'ie >= 10']})
            )
            .pipe(plugins.stripCssComments({preserve: false}))
            .pipe(plugins.rename(oBuild.output))
            .pipe(gulp.dest(buildShop.outputPath + 'css'));
    });
    done();
});

gulp.task('scripts', require('./core/task/scripts'));

gulp.task('sprites', function (done) {
    gulp.src([
        buildDir + 'svg/global/*.svg',
        buildDir + 'svg/' + buildShop.name + '/*.svg'
    ]).pipe(svgSprite({
        mode: "defs",
        svg: {
            defs: buildDir + '/svg/' + buildShop.name + '/sprite.svg'
        },
        preview: false
    })).pipe(gulp.dest(buildDir + '/')).on('end', function () {
        //copy sprite to out
        gulp.src([buildDir + 'svg/' + buildShop.name + '/sprite.svg'])
            .pipe(gulp.dest(buildShop.outputPath + '/bg/'));

        //remove sprite in build dir to prevent
        //duplication
        gulp.src([buildDir + 'svg/' + buildShop.name + '/sprite.svg']).pipe(plugins.rm());
     });
    done();
});

gulp.task('images', function (done) {
    gulp.src([
        buildDir + 'img/global/**/*.{png,gif,jpg,ico,svg}',
        buildDir + 'img/' + buildShop.name + '/**/*.{png,gif,jpg,ico,svg}'
    ])
    .pipe(plugins.image())
        .pipe(gulp.dest((buildShop.outputPath + '../img')));

    gulp.src([
        buildDir + 'bg/global/**/*.*',
        buildDir + 'bg/' + buildShop.name + '/**/*.*'
    ])
    .pipe(plugins.image())
        .pipe(gulp.dest((buildShop.outputPath + 'bg')));


    gulp.src('./theme.jpg').pipe(gulp.dest(buildShop.outputPath.replace('src', '')));
    done();
});

gulp.task('fonts', function (done) {
    gulp.src([
        buildDir + 'fonts/global/**/*.*',
        buildDir + 'fonts/' + buildShop.name + '/**/*.*'
    ]).pipe(gulp.dest(buildShop.outputPath + 'fonts'));
    done();
});


var aTasks = [
    //build fonts and images only on request not in general
    'fonts',
    'images',
    'styles',
    'scripts',
    'sprites',

];
gulp.task('default', gulp.series(aTasks), function () {});
