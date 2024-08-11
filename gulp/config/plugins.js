import replace from "gulp-replace";
import browserSync from "browser-sync";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import gulpIf from "gulp-if";

export const plugins = {
  replace: replace,
  browserSync: browserSync,
  plumber: plumber,
  notify: notify,
  if: gulpIf
}