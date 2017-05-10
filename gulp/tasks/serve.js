'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import { serve as config } from '../config';

gulp.task('serve', ['clean', 'dist'], () => {
    return browserSync(config);
});
