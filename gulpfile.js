const gulp = require('gulp'),
  prefix = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  livereload = require('gulp-livereload'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  plumber = require('gulp-plumber');

// Compress SCSS Task -
gulp.task('sass', () => {
  gulp.src('assets/**/*.scss')
    .pipe(sourcemaps.init())
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
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});

gulp.task('cleanCSS', () => {
  gulp.src('dist/flexigridcss.css')
    .pipe(cleanCSS({keepBreaks: true}))
    .pipe(rename({
      basename: 'flexigridcss.min'
    }))
    .pipe(gulp.dest('dist/'))
  ;
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('assets/**/*.scss', ['sass']);
  gulp.watch('dist/flexigridcss.css', ['cleanCSS']);
});

gulp.task('default', ['sass', 'cleanCSS', 'watch']);
