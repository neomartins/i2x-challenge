'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { html as config } from '../config';

const $ = gulpLoadPlugins();

gulp.task('html', [], () => {
    return gulp.src(config.src)
        .pipe($.useref())
        .pipe($.if('*.html', $.htmlmin(config.htmlmin)))
        .pipe(gulp.dest(config.dist))
        .pipe($.size({
            title: 'html'
        }));
});
