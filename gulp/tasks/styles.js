'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { styles as config } from '../config';

const $ = gulpLoadPlugins();

gulp.task('styles', [], () => {
    var ret = gulp.src(config.src)
        .pipe($.newer(config.tmp))
        .pipe($.sourcemaps.init())
        .pipe($.sass(config.sassOptions).on('error', $.sass.logError))
        .pipe($.autoprefixer(config.AUTOPREFIXER_BROWSERS))
        .pipe($.concat(config.out))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(config.tmp));

    if (global.isDist) {
        ret = ret
        //    .pipe($.cssnano())
            .pipe(gulp.dest(config.dist));
    }

    return ret
        .pipe($.size({
            title: 'styles'
        }));
});
