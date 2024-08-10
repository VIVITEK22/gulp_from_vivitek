import {deleteAsync} from "del";
import zip from "gulp-zip";

export const zipFunc = () => {
  deleteAsync(`./${app.path.rootFolder}.zip`);
  return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
    .pipe(zip(`${app.path.rootFolder}.zip`))
    .pipe(app.gulp.dest('./'))
}