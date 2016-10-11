var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

export function deploy() {
	return gulp.src('./dist/**/*')
    .pipe(ghPages());
}