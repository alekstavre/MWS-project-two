var gulp = require('gulp');
imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

gulp.task('default', function(){
    console.log('hello world');
});

// image task

gulp.task('image', function(){
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('minimg'));
});
gulp.task('jpg2webp', () =>
    gulp.src('img/*')
        .pipe(webp())
        .pipe(gulp.dest('img'))
);