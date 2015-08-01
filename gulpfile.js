var gulp = require('gulp')
var concat = require('gulp-concat')
var babel = require('gulp-babel')

gulp.task('gameScripts', function() {
  gulp.src('./js/scripts/*.js')
  .pipe(babel())
  .pipe(concat('game.build.js'))
  .pipe(gulp.dest('./js/build/'))
})

gulp.task('server', function() {
  gulp.src('./js/server/server.js')
  .pipe(babel())
  .pipe(concat('server.build.js'))
  .pipe(gulp.dest('./js/build/'))
})

gulp.task('watch', function() {
  gulp.watch('js/**/*.js', ['gameScripts', 'server'])
})

gulp.task('default', ['gameScripts', 'server', 'watch'])