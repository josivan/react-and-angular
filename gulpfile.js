'use strict';

const 
  gulp        = require('gulp'),
  browserify  = require('browserify'),
  source      = require('vinyl-source-stream'),
  gutil       = require('gulp-util'),
  babelify    = require('babelify'),
  wpconf      = require('./webpack.config'),
  webpack     = require('webpack'),
  gulpWebpack = require('gulp-webpack'),
  wpstream    = require('webpack-stream'),
  clean       = require('gulp-clean');

const dependencies = [
  'angular'
];


gulp.task('clean', () => {
  gulp.src(['bundle', 'dest', 'web', 'dist'])
    .pipe(clean());
});

// should be run to tranform jsx files
gulp.task('bundle', () => {
  let appBundler = browserify({
    entries: [
      'src/Login1.jsx',
      'src/LoginComponent.jsx'
    ],
    debug: true
  });

  dependencies.forEach((dep) => {
    console.log('dep', dep);
    appBundler.external(dep);
  });

  appBundler
    .transform(babelify)
    .bundle()
    .on('error', gutil.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./web/js/'));
});

// based on http://jpsierens.com/tutorial-gulp-javascript-2015-react/
// run at least once to bundle vendors content
gulp.task('vendors', () => {
  browserify({
    require: dependencies,
    debug: true
  })
    .bundle()
    .on('error', gutil.log)
    .pipe(source('vendors.js'))
    .pipe(gulp.dest('./web/js/'));
});

gulp.task('webpack', () => {
  return gulp.src('app_client/ngang.js')
    .pipe(wpstream(wpconf, webpack))
    .pipe(gulp.dest('dist/'));
});