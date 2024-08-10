import fileinclude from "gulp-file-include";
import gulpWebpHtmlNosvg from "gulp-webp-html-nosvg";
import version from 'gulp-version-number'

export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(fileinclude())
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(app.plugins.replace(/@js\//g, 'js/'))
    .pipe(app.plugins.replace(/@scss\//g, 'css/'))
    .pipe(app.plugins.replace('.scss', '.min.css'))
    .pipe(app.plugins.replace('.js', '.min.js'))
    .pipe(app.plugins.if(
      app.isBuild,
      gulpWebpHtmlNosvg()
    ))
    .pipe(app.plugins.if(
      app.isBuild,
      version({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to': ['css', 'js']
        },
        'output': {
          'file': 'gulp/version.json'
        }
      })
    ))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(
      app.plugins.if(
        app.isDev,
        app.plugins.browserSync.stream()
    ));
}