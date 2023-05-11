var gulp =- require('gulp'),
	minifyCSS = require('gulp-minify-css'),
	concat = require('gulp-concat')

gulp.task('css', function(){
	return gulp.src('gulp/*.css')
	.pipe(concat('example.css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('gulp/example')

})