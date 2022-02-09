const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const css = gulpSass(require('sass'));

   // dgulp.task('sass', async function(){
    //gulp.src('src/components/**/*.scss').pipe(css()).pipe(gulp.dest('src/css'))})


gulp.task( "sassWatch", async function(){
    gulp.watch('src/components/**/*.scss', async function(){
        gulp.src('src/components/**/*.scss').pipe(css()).pipe(gulp.dest('src/css'))
    })
}

)
