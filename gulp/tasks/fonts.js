'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { fonts as config } from '../config';

const $ = gulpLoadPlugins();

gulp.task('fonts', [], () => {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dist))
        .pipe($.size({
            title: 'fonts'
        }));
});
