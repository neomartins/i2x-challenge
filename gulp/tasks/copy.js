'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { copy as config } from '../config';
import { copyI18n as configI18n } from '../config';

const $ = gulpLoadPlugins();

gulp.task('copy', [], () => {
    return gulp.src(config.src, config.options)
        .pipe(gulp.dest(config.dist))
        .pipe($.size({
            title: 'copy'
        }));
});


