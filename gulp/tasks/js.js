import webpackStream from "webpack-stream";

export const js = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "JS",
        message: "Error <%= error.message %>"
      })
    ))
    .pipe(webpackStream(
      {
        mode: app.isDev ? 'development' : 'production',
        output: {
          filename: 'main.min.js'
        }
      }
    ))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(
      app.plugins.if(
        app.isDev,
        app.plugins.browserSync.stream()
    ));
}