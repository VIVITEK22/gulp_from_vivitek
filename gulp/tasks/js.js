import webpackStream from "webpack-stream";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

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
        plugins: [
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
          }),
          new MiniCssExtractPlugin()
        ],
        output: {
          filename: 'main.min.js'
        },
        module: {
          rules: [
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
              test: /swiper\.esm\.js/,
              sideEffects: false
            },
          ]
        },
      }
    ))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(
      app.plugins.if(
        app.isDev,
        app.plugins.browserSync.stream()
    ));
}