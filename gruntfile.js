module.exports = function (grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/*.css': 'sass/*.sass'
                }
            }
        },

        jshint: {
            all: ['js/*.js']
            }

    });

    // Load the plugins tasks

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');

     // Default task(s).

    grunt.registerTask('default', ['sass', 'jshint']);
};