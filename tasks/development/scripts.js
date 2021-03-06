import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

var wiredep = require('wiredep').stream;

const $ = gulpLoadPlugins({
  pattern: ['gulp-*', 'gulp.*', 'main-bower-files','wiredep'],
  replaceString: /\bgulp[\-.]/
});

export function processBower() {
  return gulp.src('app/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('app'));
}

export function processJS() {
  return gulp.src([
      // Note: Since we are not using useref in the scripts build pipeline,
      //       you need to explicitly list your scripts here in the right order
      //       to be correctly concatenated
      './app/scripts/main.js'
      // Other scripts
    ])
    .pipe($.newer('.tmp/scripts'))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe($.concat('main.min.js'))
    .pipe($.uglify({
      preserveComments: 'some'
    }))
    // Output files
    .pipe($.size({
      title: 'scripts'
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/scripts'))
}