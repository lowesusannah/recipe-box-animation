var gulp = require('gulp');
var shell = require('gulp-shell');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var lib = require('bower-files')({
  "overrides": {
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var isProductionBuild = utilities.env.production;

// =========== Main Build =========== //
gulp.task('build', ['ts-build', 'sass-build', 'bower-build'], function(){});

// =========== Typescript =========== //
gulp.task('ts-build', ['ts-clean'], shell.task(['tsc --outDir app']));

gulp.task('ts-clean', function(){
  return del(['app/*.js', 'app/*.js.map']);
});

// =========== SASS =========== //
gulp.task('sass-build', function() {
  return gulp.src(['resources/styles/*'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'));
});

// =========== Bower =========== //
gulp.task('bower-build', ['bower-js', 'bower-css']);

gulp.task('bower-js', ['bower-clean-js'], function() {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('bower-clean-js', function(){
  return del(['./build/js/vendor.min.js']);
});

gulp.task('bower-css', ['bower-clean-css'], function() {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('bower-clean-css', function(){
  return del(['./build/css/vendor.css']);
});

// =========== Browser Sync =========== //
gulp.task('watch', ['build'], function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(['resources/js/*.js'], ['js-sync']);
  gulp.watch(['*.html'], ['html-sync']);
  gulp.watch(['resources/styles/*.css', 'resources/styles/*.scss'], ['css-sync']);
  gulp.watch(['src/*.ts'], ['ts-sync']);
});

gulp.task('js-sync', function(){
  browserSync.reload();
});

gulp.task('html-sync', function(){
  browserSync.reload();
});

gulp.task('css-sync', ['sass-build'], function(){
  browserSync.reload("*.css");
});

gulp.task('ts-sync', ['ts-build'], function(){
  browserSync.reload();
});
