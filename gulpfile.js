/**
 * Created by simonreymann on 06.07.15.
 */
var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('default', function () {
  return gulp.src('src/backend/**/*.js')
    .pipe(react())
    .pipe(gulp.dest('build/backend'));
});