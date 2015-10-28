var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');

var RevAll = require('gulp-rev-all');

gulp.task('index', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dest'));
});

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']}),
        csswring
    ];

    var RevAll = require('gulp-rev-all');

    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});

gulp.task('default', ['index', 'css'], function () {
    var revAll = new RevAll();

    return gulp.src('dest/**')
        .pipe(revAll.revision())
        .pipe(gulp.dest('cdn'));
});
