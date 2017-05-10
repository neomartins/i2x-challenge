'use strict';

var dist = './dist';
var app = './app';
var tmp = './tmp';
var mui = './node_modules/material-ui/src';
var port = 4000;

export let browserSync = {
    server: {
        baseDir: [tmp, app]
    },
    files: [
        `${tmp}/**/*`,
        `${app}/**/*.html`,
        `${app}/**/fonts/**/*`,
        `${app}/**/images/**/*`,
        `${app}/**/locales/**/*`
    ],
    port: 4000
};

export let serve = {
    server: {
        baseDir: [dist]
    },
    files: [
        `${dist}/**/*`
    ],
    port: 4000
};

export let clean = {
    dest: [
        tmp,
        `${dist}/fonts`,
        `${dist}/images`,
        `${dist}/scripts`,
        `${dist}/styles`,
        `${dist}/locales`
    ],
    options: {
        dot: true,
        force: true
    }
};

export let copy = {
    src: [`${app}/*`, `!${app}/*.html`],
    dist: dist,
    options: {
        dot: true
    }
};

export let copyI18n = {
    src: [`${app}/locales/**/*`],
    dist: `${dist}/locales`,
    options: {
        dot: true
    }
};

export let fonts = {
    src: [`${app}/fonts/**`],
    dist: `${dist}/fonts`
};

export let html = {
    src: `${app}/**/*.html`,
    assets: {
        searchPath: '{tmp,app}'
    },
    dist: dist,
    htmlmin: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true
    },
    uncss: {
        html: [
            'app/index.html'
        ]
    }
};

export let images = {
    src: [`${app}/images/**/*`],
    dist: `${dist}/images`,
    imagemin: {
        progressive: true,
        interlaced: true
    }
};

export let lint = {
    src: [
        `${app}/scripts/**/*.js`,
        `${app}/scripts/**/*.jsx`
    ]
};

export let scripts = {
    apache: true,
    debug: true,//!global.isDist,
    bundleConfigs: [{
        entries: `${app}/scripts/main.js`,
        dest: `${tmp}/scripts`,
        dist: `${dist}/scripts`,
        outputName: 'main.js'
    }],
    extensions: ['.js', '.jsx'],
    uglify: {
        //preserveComments: 'license'
    },
    babelify: {
        presets: ['es2015', 'react']
    }
};

export let styles = {
    src: [
        `${app}/styles/**/*.scss`,
        `${app}/styles/**/*.css`
    ],
    out: 'main.css',
    dist: `${dist}/styles`,
    sassOptions: {
        precision: 10
    },
    tmp: `${tmp}/styles`,
    AUTOPREFIXER_BROWSERS: [
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
    ]
};
