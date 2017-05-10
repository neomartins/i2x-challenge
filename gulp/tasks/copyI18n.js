'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { copyI18n as configI18n } from '../config';

const $ = gulpLoadPlugins();

gulp.task('copyI18n', [], () => {
    return gulp.src(configI18n.src, configI18n.options)
        .pipe(gulp.dest(configI18n.dist))
        .pipe($.size({
            title: 'copyI18n'
        }));
});