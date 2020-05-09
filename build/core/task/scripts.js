module.exports = function (done) {
    const scripts = require()
    buildScripts.forEach(function (oBuild) {
        gulp.src(oBuild.input)
            .pipe(plugins.concat(oBuild.output))
            .pipe(plugins.uglify())
            .pipe(gulp.dest(buildShop.outputPath + 'scripts'));
    });
    done();
};
