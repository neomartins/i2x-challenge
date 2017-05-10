'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { images as config } from '../config';

const $ = gulpLoadPlugins();

gulp.task('images', [], () => {
    return gulp.src(config.src)
        .pipe($.cache($.imagemin(config.imagemin)))
        .pipe(gulp.dest(config.dist))
        .pipe($.size({
            title: 'images'
        }));
});
