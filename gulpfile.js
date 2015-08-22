var gulp = require('gulp'),
  path = require('path');

var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var mocha = require('gulp-mocha');
var runSequence = require('run-sequence');


var srcFile = './src/*.js';
var buildFolder = './build';


var testSrcFile = './test/src/*.js';
var testBuildFolder = './test/build';



gulp.task('js', function() {
  return gulp.src( srcFile )
    .pipe( babel() )
    .pipe( uglify() )
    .pipe( gulp.dest(buildFolder) )
  ;
});



gulp.task('default', ['js']);
