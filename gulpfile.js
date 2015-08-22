var gulp = require('gulp'),
  path = require('path');

var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');


var srcFile = './src/*.js';
var buildFolder = './build';




gulp.task('js', function() {
  return gulp.src( srcFile )
    .pipe( babel() )
    .pipe( uglify() )
    .pipe( gulp.dest(buildFolder) )
  ;
});



gulp.task('default', ['js']);
