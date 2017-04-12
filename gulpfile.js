

/* REQUIRES --------------------*/
var gulp     = require('gulp');
var htmlmin  = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');

/* HTML ------------------------*/
gulp.task('htmlmin', function () {
  gulp.src('src/*.html')
    .pipe(htmlmin({
        collapseWhitespace   : true,
        conservativeCollapse : true
    }))
    .pipe(gulp.dest('dist'));
});


/* ASSETS ---------------------*/
gulp.task('imagemin', function () {
  gulp.src('src/*.{jpg|png|gif}')
    .pipe(imagemin())
    .pipe(gulp.dest('dist'));
});


/* DEFAULT --------------------*/
gulp.task('default', ['htmlmin', 'imagemin']);


/* WATCH --------------------*/
gulp.task('watch', function() {
  gulp.watch('*.html', ['htmlmin']);
  gulp.watch('*.{jpg|png|gif}', ['imagemin']);
});
