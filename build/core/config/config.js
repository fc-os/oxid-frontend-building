module.exports = function() {
    const args = require('minimist')(process.argv.slice(2));
    return {
        baseDir : '../../../',

        getBuildDir:function() {
            return this.baseDir+'build/';
        },
        getSourceDir:function() {
            return this.getBuildDir()+'src/';
        },

        getDestinationDir:function() {
            return this.baseDir+'out/'+args.project+'/src/';
        }

    };
};
