'use strict';

import gulp from 'gulp';
import {styles as config} from '../config';

gulp.task('watch', ['setWatch', 'browserSync'], () => {
    gulp.watch(config.src, ['styles']);
});
