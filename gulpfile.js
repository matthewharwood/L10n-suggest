var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');


var CONST = {};
var tsProject = ts.createProject({
    noImplicitAny: true,
    sortOutput: true
});


CONST.tmp = {
    src: 'src/**/*.ts',
    out: 'output.js',
    dest: 'src/.tmp/js'
};
gulp.task('tmp.js', function () {
    var tsResult = gulp.src(CONST.tmp.src)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return tsResult.js
        .pipe(concat(CONST.tmp.out))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(CONST.tmp.dest));
});
gulp.task('watch', ['tmp.js'], function () {
    gulp.watch(CONST.tmp.src, ['tmp.js']);
});


CONST.compress = {
    src: 'src/.tmp/js/*.js',
    out: 'output.js',
    dest: 'build/',
    options: {
        mangle: true,
    }
};
gulp.task('compress.js', function() {
    return gulp.src(CONST.compress.src)
        .pipe(uglify(CONST.compress.options))
        .pipe(gulp.dest(CONST.compress.dest + 'js'));
});
gulp.task('compress.html', function() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(CONST.compress.dest + 'html'))
});