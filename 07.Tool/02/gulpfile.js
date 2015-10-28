var gulp = require('gulp');

gulp.task('default', ['styles', 'scripts'], function() {
  console.log('all');
});

gulp.task('styles', function() {
  console.log('style');
});

gulp.task('scripts', function() {
  console.log('script');
});
