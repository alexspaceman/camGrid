var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('scripts', function() {
  gulp.src('./js/scripts/*.js')
  .pipe(concat('build.js'))
  .pipe(gulp.dest('./js/build/'))
})

// gulp.task('watch', function() {
//   return
// })

gulp.task('default', ['scripts'])