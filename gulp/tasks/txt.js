export const txt = () => {
  return app.gulp.src(app.path.src.txt)
    .pipe(app.gulp.dest(app.path.build.txt))
    .pipe(
      app.plugins.if(
        app.isDev,
        app.plugins.browserSync.stream()
    ));
}