import gulp from 'gulp';
import del from 'del';

import {
	processSass
} from './styles';
import {
	processJS
} from './scripts';

import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

import browserSync from 'browser-sync';
const reload = browserSync.reload;

export function reloadBrowser(done) {
	browserSync.reload();
	done();
}

export function browser(done) {
	browserSync.init({
		notify: false,
		// Customize the Browsersync console logging prefix
		logPrefix: 'WSK',
		files: [
			'dist/**/*.css'
		],
		// Allow scroll syncing across breakpoints
		scrollElementMapping: ['main', '.mdl-layout'],
		// Run as an https by uncommenting 'https: true'
		// Note: this uses an unsigned certificate which on first access
		//       will present a certificate warning in the browser.
		// https: true,
		server: ['.tmp', 'app'],
		port: 8080
	}, done);
}

export function watch() {
	gulp.watch(['app/**/*.html'], gulp.series(reloadBrowser));
	gulp.watch(['app/styles/**/*.{scss,css}'], gulp.series(processSass));
	gulp.watch(['app/scripts/**/*.js'], gulp.series(processJS, reloadBrowser));
	gulp.watch(['app/images/**/*'], reloadBrowser);
}