var gulp = require('gulp');
imagemin = require('gulp-imagemin');

gulp.task('default', function(){
    console.log('hello world');
});

// image task

gulp.task('image', function(){
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('minimg'));
});