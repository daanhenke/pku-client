const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const ejs = require('gulp-ejs');
const extReplace = require('gulp-ext-replace');

gulp.task('html', function () {
    return gulp.src('src/ejs/*.ejs')
        .pipe(ejs())
        .pipe(extReplace('.html'))
        .pipe(gulp.dest('dist/html'));
});

gulp.task('css', function () {
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('client.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('js-libs', function () {
    return gulp.src([
        "node_modules/systemjs/dist/system.js",
        "node_modules/babel-polyfill/dist/polyfill.js"
        ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('dist/js'));
})

gulp.task('default', ['html', 'css', 'js', 'js-libs']);