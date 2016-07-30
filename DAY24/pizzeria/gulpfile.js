// 'use strict';
// var gulp = require('gulp');
// var sass = require('gulp-sass');
// gulp.task('sass', function () {
//   gulp.src('./sass/**/*.sass')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });
// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.sass', ['sass']);
// });


'use strict';

 var gulp        = require('gulp'),
     sourcemaps  = require('gulp-sourcemaps'),
     sass        = require('gulp-sass');

 gulp.task('sass', function () {
   return gulp.src('sass/**/*.{sass,scss}')
   .pipe(sourcemaps.init())
   .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('css'));
 });
  
 gulp.task('sass:watch', function () {
   gulp.watch('sass/**/*.{sass,scss}', ['sass']);
 });
 