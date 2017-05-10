'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import {browserSync as config} from '../config';

gulp.task('browserSync', ['styles', 'scripts'], () => {
    browserSync(config);
});
