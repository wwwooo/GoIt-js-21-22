const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('toES5', function() {
    return gulp
        .src('js/src/main.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('js/dist'))
});
