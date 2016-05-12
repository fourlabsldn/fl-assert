/* eslint-env node */

const gulp = require('gulp');

const sourcemaps = require('gulp-sourcemaps');
const babel = require('rollup-plugin-babel');
const rollup = require('gulp-rollup');

const gulpDoxx = require('gulp-doxx');

gulp.task('rollup', () => {
  gulp.src([
    './src/assert.js',
  ])
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
  .pipe(gulp.dest('./dist/'));
});

gulp.task('docs', () => {
  gulp.src(['src/*.js', 'README.md'], { base: '.' })
    .pipe(gulpDoxx({
      title: 'Assert',
      urlPrefix: '\/fl-assert', // Name of git repo. This will be important in gh-pages
    }))
    .pipe(gulp.dest('docs'));
});

gulp.task('build', ['rollup']);
gulp.task('build-docs', ['docs']);
