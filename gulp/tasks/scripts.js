'use strict';

import gulp from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';
import gulpLoadPlugins from 'gulp-load-plugins';
import bundleLogger from '../util/bundleLogger';
import handleErrors from '../util/handleErrors';
import { scripts as config } from '../config';
import merge from 'merge-stream';
var gzip = require('gulp-gzip');

const $ = gulpLoadPlugins();

gulp.task('scripts', ['lint'], callback => {
    var bundleQueue = config.bundleConfigs.length;

    var browserifyThis = bundleConfig => {
        var bundler = browserify({
            cache: {},
            packageCache: {},
            fullPaths: false,
            entries: bundleConfig.entries,
            extensions: config.extensions,
            debug: config.debug
        });

        var bundle = (changedFiles) => {
            bundleLogger.start(bundleConfig.outputName);
            var ret = bundler
                .bundle()
                .on('error', handleErrors)
                .pipe(source(bundleConfig.outputName))
                .pipe(gulp.dest(bundleConfig.dest));

            if (changedFiles) {
                var lintStream = gulp.src(changedFiles)
                    .pipe($.eslint())
                    .pipe($.eslint.format());

                merge(lintStream, ret);
            }

            if (!config.debug) {
                ret = ret
                    .pipe(buffer())
                    .pipe($.uglify(config.uglify))
                    .pipe(gulp.dest(bundleConfig.dist));
            } else {
                if (config.apache) {
                    ret = ret
                        .pipe(buffer())
                        .pipe(gulp.dest(bundleConfig.dist));
                }
            }
            return ret
                .on('end', reportFinished)
                .pipe($.size({
                    title: 'scripts'
                }));
        };

        bundler.transform(babelify.configure(config.babelify));

        if (global.isWatching) {
            bundler = watchify(bundler);
            bundler.on('update', bundle);
        }

        var reportFinished = () => {
            bundleLogger.end(bundleConfig.outputName);

            if (bundleQueue) {
                bundleQueue--;
                if (bundleQueue === 0) {

                    callback();
                }
            }
        };

        return bundle();
    };

    config.bundleConfigs.forEach(browserifyThis);
});
