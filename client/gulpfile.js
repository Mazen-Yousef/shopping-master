const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const css = gulpSass(require('sass'));

gulp.task('sass', async function(){
    gulp.src('src/*.scss').pipe(css()).pipe(gulp.dest('src/css'))


}

)
