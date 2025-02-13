import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    html: `${buildFolder}/`,
    txt: `${buildFolder}/`,
    images: `${buildFolder}/img`,
    css: `${buildFolder}/css`,
    js: `${buildFolder}/js`,
    fonts: `${buildFolder}/fonts`
  },
  src: {
    html: `${srcFolder}/*.html`,
    txt: `${srcFolder}/*.txt`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/main.js`,
    svgicons: `${srcFolder}/svgicons/*.svg`
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    txt: `${srcFolder}/*.txt`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    svg: `${srcFolder}/img/**/*.svg`,
    js: `${srcFolder}/js/**/*.js`,
    svgicons: `${srcFolder}/svgicons/**/*.svg`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ''
}