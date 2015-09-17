module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        nwjs: {
            options: {
                version: "0.12.1",
                platforms: ['osx64'],
                buildDir: './webkitbuilds',
            },
            src: ['./**/*']
        }
    });

    // These plugins provide necessary tasks

    grunt.loadNpmTasks('grunt-nw-builder');


};

