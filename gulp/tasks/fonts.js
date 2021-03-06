/**
 * Копирует шрифты
 */
var gulp = require('gulp'),
    config = require('../config');

gulp.task('fonts', function () {
    return gulp.src(config.fonts.src)
        .pipe(gulp.dest(config.paths.deploy.fonts))
        .pipe(gulp.dest(config.fonts.dest));
});