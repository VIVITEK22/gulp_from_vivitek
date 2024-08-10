import svgSprite from "gulp-svg-sprite";

export const svgSpriteFunc = () => {
  return app.gulp.src(app.path.src.svgicons, {})
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: `../icons/icons.svg`,
        },
      }
    }))
    .pipe(app.gulp.dest(app.path.build.images));
}