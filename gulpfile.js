var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var gulpMinifyCss = require('gulp-minify-css');
var gulpSass = require('gulp-sass');
var gulpRename = require('gulp-rename');
var gulpIgnore = require('gulp-ignore');

var distDir = 'dist';
var srcDir = 'src';

gulp.task('build', function() {
  return gulp.src(srcDir + '/**/[^_]*.scss')
    .pipe(gulpSass()).on('error', gulpSass.logError)
    .pipe(gulp.dest(distDir))
    .pipe(browserSync.stream())
    .pipe(gulpMinifyCss())
    .pipe(gulpRename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest(distDir));
});

gulp.task('serve', ['build'], function() {
  browserSync.init({
    server: {
      baseDir: 'test',
      routes: {
        '/dist': 'dist'
      },
    },
    open: false,
  });

  gulp.watch('test/**/*.html').on('change', browserSync.reload);
  gulp.watch(srcDir + '/**/*.scss', ['build']);
});

gulp.task('default', ['build'])
