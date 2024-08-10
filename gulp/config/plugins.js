import replace from "gulp-replace";
import browserSync from "browser-sync";
import gulpIf from "gulp-if";

export const plugins = {
  replace: replace,
  browserSync: browserSync,
  if: gulpIf
}