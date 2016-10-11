import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

export function copyFiles() {
	return gulp.src([
		'app/*',
		'!app/*.html',
		'node_modules/apache-server-configs/dist/.htaccess'
	], {
			dot: true
		}).pipe(gulp.dest('dist'))
		.pipe($.size({
			title: 'copy'
		}));
}