import { configFTP } from "../config/configftp.js";
import vinylFtp from "vinyl-ftp";
import gutil from "gulp-util";

export const ftp = () => {
  configFTP.log = gutil.log;
  const ftpConnect = vinylFtp .create(configFTP);
  return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
    .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
}
