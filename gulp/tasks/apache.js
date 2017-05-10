'use strict';

import gulp from 'gulp';
import { styles as config } from '../config';

gulp.task('apache', ['setWatch', 'setDist', 'copy', 'fonts', 'html', 'images', 'scripts', 'styles'], () => {
    gulp.watch(config.src, ['styles']);
});
