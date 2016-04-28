////////////////////// DEPENDENCIES AND VARIABLES //////////////////////
var gulp = require('gulp');

// used for build and clean tasks.
var utilities = require('gulp-util');
var del = require('del');

// set up server with watchers and run typescript compiler in the shell.
var browserSync = require('browser-sync').create();
var shell = require('gulp-shell');

// sass dependencies.
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');



////////////////////// TYPESCRIPT //////////////////////

// clean task
gulp.task('tsClean', function(){
  return del(['app/*.js', 'app/*.js.map']);
});

// clean and then compile once. To be called from server and global build.
gulp.task('ts', ['tsClean'], shell.task([
  'tsc'
]));

////////////////////// SASS //////////////////////

gulp.task('sassBuild', function() {
  return gulp.src(['resources/styles/*'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/css'));
});

////////////////////// SERVER //////////////////////

gulp.task('default', ['ts', 'sassBuild'], function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(['*.html'], ['htmlBuild']).on('change', function(e) {
    console.log('Gulp Watch ----> ' + e.path + ' was ' + e.type + ', running tasks...');
  });
  gulp.watch(['resources/styles/*/*.css', 'resources/styles/*/*.scss'], ['cssBuild']).on('change', function(e) {
    console.log('Gulp Watch ----> ' + e.path + ' was ' + e.type + ', running tasks...');
  });
  gulp.watch(['app/*.ts'], ['tsBuild']).on('change', function(e) {
    console.log('Gulp Watch ----> ' + e.path + ' was ' + e.type + ', running tasks...');
  });
});


gulp.task('htmlBuild', function(){
  browserSync.reload();
});

gulp.task('cssBuild', ['sassBuild'], function(){
  browserSync.reload();
});

gulp.task('tsBuild', ['ts'], function(){
  browserSync.reload();
});

////////////////////// GLOBAL BUILD TASK //////////////////////

// global build task with individual clean tasks as dependencies.
gulp.task('prod', ['ts'], function(){
  return gulp
    .src(['resources/styles/*'])
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/css'));
});
