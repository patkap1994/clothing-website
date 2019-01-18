const gulp = require('gulp');
const concat = require('gulp-concat-css');
const concatJS = require('gulp-concat');
const minifyJS = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');

//Concatenation of all css files into one css file
gulp.task('buildCSS', function() {
    return gulp.src('./src/css/**/*.css')
    .pipe(concat('bundle.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/'));
});

//Concatenation of JS files
gulp.task('buildJS', function() {
    return gulp.src('./src/js/**/*.js')
    .pipe(concatJS('bundle.js'))
    .pipe(minifyJS())
    .pipe(gulp.dest('dist/js/'));
});

//All above
gulp.task('build', ['buildCSS', 'buildJS']);

