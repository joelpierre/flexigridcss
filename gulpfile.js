const gulp = require('gulp'),
  prefix = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  livereload = require('gulp-livereload'),
  plumber = require('gulp-plumber');

// Compress SCSS Task -
gulp.task('sass', () => {
  gulp.src('assets/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'nested' // nested, expanded, compact, compressed
    }))
    .pipe(plumber.stop())
    .pipe(prefix({
      env: './.browserslistrc',
      grid: true,
      flexbox: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('assets/**/*.scss', ['sass']);
});

gulp.task('default', ['sass',  'watch']);
