import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

export function processImages() {
	return gulp.src('app/images/**/*')
		.pipe($.cache($.imagemin({
			progressive: true,
			interlaced: true
		})))
		.pipe(gulp.dest('dist/images'))
		.pipe($.size({
			title: 'images'
		}));
}