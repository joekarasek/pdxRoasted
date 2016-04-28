var gulp = require('gulp');
var utilities = require('gulp-util');
var del = require('del');
var browserSync = require('browser-sync').create();
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

// Build tasks
gulp.task('tsClean', function(){
  return del(['app/*.js', 'app/*.js.map']);
});

gulp.task('ts', ['tsClean'], shell.task([
  'tsc'
]));

gulp.task('sassBuild', function() {
  return gulp.src(['resources/styles/*'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/css'));
});

// Run dev server with build dependencies
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

// Production Build
gulp.task('prod', ['ts'], function(){
  return gulp
    .src(['resources/styles/*'])
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/css'));
});
