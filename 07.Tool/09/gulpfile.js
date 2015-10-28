var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');
var RevAll = require('gulp-rev-all');

var livereload = require('gulp-livereload');

gulp.task('index', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dest'));
});

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']}),
        csswring
    ];

    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});

gulp.task('default', ['index', 'css'], function () {
    var revAll = new RevAll({ dontRenameFile: [/^\/favicon.ico$/g, '.html'] });

    return gulp.src('dest/**')
        .pipe(revAll.revision())
        .pipe(gulp.dest('cdn'))
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/*.css', ['default']);
});
