import path from 'path';
import gulp from 'gulp';
import del from 'del';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
import pkg from './package.json';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

import { clean } from './tasks/development/clean';
import { copyFiles } from './tasks/development/copy';
import { processHTML } from './tasks/development/html';
import { processImages } from './tasks/development/images';
import { processJS } from './tasks/development/scripts'
import { processSass } from './tasks/development/styles';
import { browser, watch } from './tasks/development/server';

const serve = gulp.series(processJS, processSass, gulp.parallel(browser, watch));
export { serve };



