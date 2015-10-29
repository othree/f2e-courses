var gulp = require('gulp'),
    useref = require('gulp-useref');
 
gulp.task('default', function () {
    var assets = useref.assets();
 
    return gulp.src('src/*.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dest'));
});
