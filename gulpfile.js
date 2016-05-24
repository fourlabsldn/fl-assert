/* eslint-env node */

const gulp = require('gulp');
const watch = require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('rollup-plugin-babel');
const rollup = require('gulp-rollup');
const gulpDoxx = require('gulp-doxx');
const jasmine = require('gulp-jasmine');
const jasmineBrowser = require('gulp-jasmine-browser');

const tests = {
  src: ['./tests/src/assert-Specs.js'],
  build: './tests/build/',
};

const app = {
  src: './src/assert.js',
  build: './dist/',
};

gulp.task('rollup', () => {
  gulp.src(app.src)
  .pipe(sourcemaps.init())
  .pipe(rollup({
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['es2015-rollup'],
      }),
    ],
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(app.build));
});

gulp.task('watch:rollup', () => {
  gulp.watch(app.src, ['rollup', 'rollup-tests']);
});

gulp.task('rollup-tests', () => {
  gulp.src(tests.src)
  .pipe(sourcemaps.init())
  .pipe(rollup({
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['es2015-rollup'],
      }),
    ],
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(tests.build));
});

gulp.task('watch:tests', () => {
  gulp.watch(tests.src, ['rollup-tests']);
});

gulp.task('docs', () => {
  gulp.src(['src/*.js', 'README.md'], { base: '.' })
    .pipe(gulpDoxx({
      title: 'Assert',
      urlPrefix: '/fl-assert', // Name of git repo. This will be important in gh-pages
    }))
    .pipe(gulp.dest('docs'));
});

gulp.task('jasmine', () => {
  gulp.src(tests.build)
  .pipe(jasmine());
});

gulp.task('jasmine-browser', () => {
  return gulp.src(tests.build)
    .pipe(watch(tests.build + '*'))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({ port: 8888 }));
});

gulp.task('watch', ['watch:rollup', 'watch:tests']);
gulp.task('test', ['rollup-tests', 'jasmine', 'watch']);
gulp.task('test-debug', ['rollup-tests', 'jasmine-browser', 'watch']);
gulp.task('build', ['rollup']);
gulp.task('build-docs', ['docs']);
