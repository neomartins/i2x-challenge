'use strict';

import gulp from 'gulp';
import del from 'del';
import { clean as config } from '../config';

gulp.task('clean', (callback) => {
    return del(config.dest, config.options, callback);
});
