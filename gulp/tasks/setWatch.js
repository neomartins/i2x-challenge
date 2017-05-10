import gulp from 'gulp';

gulp.task('setWatch', (callback) => {
    global.isWatching = true;
    callback();
});
