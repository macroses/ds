module.exports = function() {
    // Обработка файлов библиотек и конкатенация в один js файл
    $.gulp.task('scripts:lib', function() {
        return $.gulp.src(['node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
                            'src/static/js/ie11-customProperty.js',
                            'node_modules/axios/dist/axios.min.js',
                            'node_modules/vue/dist/vue.min.js',
                            'node_modules/chart.js/dist/Chart.min.js',
                            'node_modules/lodash/lodash.min.js',
                            'node_modules/promise-polyfill/dist/polyfill.min.js',
                            'node_modules/choices.js/public/assets/scripts/choices.min.js',
                            'node_modules/dragula/dist/dragula.min.js',
                            'node_modules/flatpickr/dist/flatpickr.min.js',
                            'node_modules/flatpickr/dist/l10n/ru.js']) // Локализация календаря
        .pipe($.gp.concat('libs.min.js'))
        .pipe($.gulp.dest('build/static/js/'))
        .pipe($.bs.reload({
            stream: true
        }));
    });
    // Обработка файлов библиотек и перенос в build в исходном виде
    // $.gulp.task('scripts:lib', function() {
    //     return $.gulp.src('src/static/libs/*/**')
    //     .pipe($.gulp.dest('build/libs/'))
    //     .pipe($.bs.reload({
    //         stream: true
    //     }));
    // });
    // Перенос файла common.js в папку build
    $.gulp.task('scripts', function() {
        return $.gulp.src('src/static/js/common.js')
        .pipe($.gulp.dest('build/js/'))
        .pipe($.bs.reload({
            stream: true
        }));
    });
};
