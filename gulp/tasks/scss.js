import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import GulpCleanCss from "gulp-clean-css";
import autoPrefixer from "gulp-autoprefixer";
import gulpWebpcss from "gulp-webpcss";
import gulpGroupCssMediaQueries from "gulp-group-css-media-queries";


const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "Scss",
        message: "Error <%= error.message %>"
      })
    ))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(
      app.plugins.if(
        app.isBuild,
        gulpGroupCssMediaQueries()
    ))
    .pipe(
      app.plugins.if(
        app.isBuild,
        gulpWebpcss(
          {
            webpClass: ".webp",
            noWebpClass: ".no-webp"
          }
        )
    ))
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoPrefixer({
          grid: true,
          overrideBrowserslist: ["last 3 versions"],
          cascade: true
        })
    ))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(
      app.plugins.if(
        app.isBuild,
        GulpCleanCss()
    ))
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(
      app.plugins.if(
        app.isDev,
        app.plugins.browserSync.stream()
    ))
}