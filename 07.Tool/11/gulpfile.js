var gulp = require('gulp');
var gutil = require("gulp-util");

var postcss = require('gulp-postcss');
var atImport = require("postcss-import")
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');

var webpack = require("webpack");

var RevAll = require('gulp-rev-all');

var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
 
gulp.task('index', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dest'));
});

gulp.task('css', function () {
  var processors = [
    atImport(),
    autoprefixer({browsers: ['last 1 version']}),
    csswring
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'))
    .pipe(livereload());
});

gulp.task('js', function () {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    livereload();
  });
});

gulp.task('default', ['index', 'js', 'css'], function () {
    var revAll = new RevAll({ dontRenameFile: [/^\/favicon.ico$/g, '.html'] });

    return gulp.src('dest/**')
        .pipe(revAll.revision())
        .pipe(gulp.dest('cdn'))
        .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/js/**/*.js', ['js']);
});
