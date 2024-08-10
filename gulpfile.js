import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  gulp: gulp,
  path: path,
  plugins: plugins
}

import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { images } from './gulp/tasks/images.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { ottToTtf, myTtfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { svgSpriteFunc } from './gulp/tasks/svgSpriteFunc.js';
import { zipFunc } from './gulp/tasks/zipFunc.js';
import { ftp } from './gulp/tasks/ftp.js';

async function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.svgicons, svgSpriteFunc);
}

const fonts = gulp.series(ottToTtf, myTtfToWoff, fontsStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, images, svgSpriteFunc, js));

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks)
const deployZip = gulp.series(reset, mainTasks, zipFunc);
const deployFTP = gulp.series(reset, mainTasks, ftp);

export { dev }
export { build }
export { deployZip }
export { deployFTP }

gulp.task('default', dev);