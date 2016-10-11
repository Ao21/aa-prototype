import gulp from 'gulp';
import del from 'del';
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

export function clean() {
	return del(['.tmp', 'dist/*', '!dist/.git'], { dot: true });
}