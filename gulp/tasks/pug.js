module.exports = () => {
    $.gulp.task('pug', () => {
        return $.gulp.src('src/pug/pages/*.pug')
            .pipe($.glp.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('dist'))
            .on('end', $.bs.reload);
    });
}