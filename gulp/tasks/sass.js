module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src([
            'src/static/css/bootstrap-ie11.min.css',
            'src/static/css/main.scss',
            'src/static/css/dark-theme.scss',
            'src/static/css/light-theme.scss',
            'src/static/css/libs.scss',
        ], {base: 'src/static/css'})
            .pipe($.gp.sourcemaps.init())
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "style"
            }))
            // .pipe($.gp.csso())
            .pipe($.gp.sass({ outputStyle: 'expanded' }))
            .pipe($.gp.autoprefixer({
                overrideBrowserslist: ['last 2 versions']
            }))
            // .pipe($.gp.sourcemaps.write('./'))
            .pipe($.gulp.dest('build/css/'))
            // Минифицированная версия
            .pipe($.gp.sass({ outputStyle: 'compressed' }))
            // .pipe($.gp.rename('main.min.css'))
            // .pipe($.gp.sourcemaps.write('./'))
            .pipe($.gulp.dest('build/css/'))
            // .on('end', $.bs.reload)

            .pipe($.bs.reload({
                stream:true
            }));
    });
}
