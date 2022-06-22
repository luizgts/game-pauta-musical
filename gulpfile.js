/* eslint-disable */
const { series, parallel, watch, src, dest } = require('gulp');
const minify = require('gulp-minify')
const htmlmin = require('gulp-htmlmin')
const cssmin = require('gulp-clean-css')

const destDir = './docs'

function minifyJS() {
    return src('./src/*.js')
        .pipe(minify())
        .pipe(dest(destDir))
}

function minifyHTML() {
    return src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest(destDir))
}

function minifyCSS() {
    return src('./src/*.css')
        .pipe(cssmin())
        .pipe(dest(destDir))
}

function assetsCopy() {
    return src('./src/assets/**')
        .pipe(dest(destDir+'/assets/'))
}

exports.default = series(
    minifyJS,
    minifyHTML,
    minifyCSS,
    assetsCopy
)
