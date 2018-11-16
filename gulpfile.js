const gulp = require('gulp');
const concat = require('gulp-concat-css');
const imagemin = require('gulp-imagemin');
const concatJS = require('gulp-concat');

//Concatenation of all css files into one css file
gulp.task('concat', function() {
    return gulp.src('./src/css/**/*.css')
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('dist/css/'));
});

//Minifying images
gulp.task('minifyimg', function() {
    return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img/'));
});

//Concatenation of JS files
//Minifying images
gulp.task('concatJS', function() {
    return gulp.src('./src/js/**/*.js')
    .pipe(concatJS('bundle.js'))
    .pipe(gulp.dest('dist/js/'));
});

//All above
gulp.task('build', ['concat', 'minifyimg', 'concatJS']);

