'use strict';
var project = '/';
var src = './src' + project;
var dist = './build' + project;
var assets = '';
var srcAssets = src + assets;
var distAssets = dist + assets;
var deploy2 = './deploy' + project;
var deploy = './deploy2' + project;

module.exports = {
    paths: {
        project: project,
        src: src,
        dist: dist,
        assets: assets,
        srcAssets: srcAssets,
        distAssets: distAssets,
        deploy: {
            js: deploy + '/js',
            css: deploy + '/css',
            index: deploy,
            images: deploy,
            data: deploy + '/data',
            fonts: deploy + '/css/fonts',
            vendor: {
                js: deploy + '/js/vendor',
                css: deploy + '/css/vendor'
            },
            utils: deploy + '/utils'
        }
    },

    clean: {
        dest: dist
    },

    css: {
        src: [
            srcAssets + '/css/**/*.css',
            '!' + srcAssets + '/css/*.min.css',
            '!' + srcAssets + '/css/*.all.css'
        ],
        dest: distAssets + '',
        images: {
            src: [srcAssets + '/css/**/*.png'],
            dest: distAssets + ''
        }
    },

    less: {
        src: [srcAssets + '/css/less/**/*.less'],
        dest: distAssets + '/css'
    },

    js: {
        src: [
            srcAssets + '/js/modules/**/*.js',
            srcAssets + '/js/**/*.js',
            srcAssets + '/js/*.js',
            '!' + srcAssets + '/js/*.min.js',
            '!' + srcAssets + '/js/**/*.min.js',
            '!' + srcAssets + '/js/vendor/**/*.js'
        ],
        destName: 'index.js',
        dest: distAssets + '/js'
    },

    watch: {
        src: src
    },

    images: {
        src: [srcAssets + '/**/images/**/*'],
        dest: distAssets + '/images'
    },

    utils:{
        src:[srcAssets + '/utils/**/*'],
        dest: distAssets + '/utils'
    },

    vendors: {
        src: {
            js: [/*'./node_modules/dustjs-linkedin/dist/dust-core.min.js'*/
                './node_modules/jquery/dist/jquery.min.js',
                './node_modules/underscore/underscore-min.js',
                srcAssets + '/js/vendor/require.js'
            ],
            css: []
        },
        dist: {
            js: distAssets + '/js/vendor',
            css: distAssets + '/css/vendor'
        }
    },

    data: {
        src: srcAssets + 'data/**/*',
        dest: distAssets + 'data'
    },

    fonts: {
        src: srcAssets + '/css/fonts/**/*',
        dest: distAssets + '/css/fonts'
    },

    index: {
        src: srcAssets + '/*.*',
        dest: distAssets + ''
    },

    gc: {
        src: [src + '/**/*.compiled.css']
    }
};