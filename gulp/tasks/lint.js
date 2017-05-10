'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { lint as config } from '../config';

const $ = gulpLoadPlugins();

gulp.task('lint', [], () => {
    return gulp.src(config.src)
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failOnError());
});
