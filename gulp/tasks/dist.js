'use strict';

import gulp from 'gulp';

gulp.task('dist', ['clean', 'setDist', 'copy', 'copyI18n', 'fonts', 'html', 'images', 'lint', 'scripts', 'styles']);
