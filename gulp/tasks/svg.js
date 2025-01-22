export const svg = async () => {
  return app.gulp.src(app.path.src.svg, { encoding: false })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SVG",
        message: "Error <%= error.message %>"
      })
    ))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(
      app.plugins.if(
        app.isDev,
        app.plugins.browserSync.stream()
    ));
}