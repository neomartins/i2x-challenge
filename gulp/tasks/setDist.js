import gulp from 'gulp';

gulp.task('setDist', (callback) => {
    global.isDist = true;
    process.env.NODE_ENV = 'production'
    callback();
});
