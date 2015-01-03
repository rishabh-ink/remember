var gulp = require("gulp");
var CFG  = require("./utils/config.js");
var $    = require("gulp-load-plugins")();
var path = require("path");
var pkg  = require(path.join("..", CFG.FILE.config.pkg));

/**
 * markup:revise
 * @see www.npmjs.org/package/useref-file
 */
gulp.task("markup:revise", ["style:compile"], function () {
  var assets = $.useref.assets({
    searchPath: [
      CFG.DIR.src
    ]
  });

  return gulp.src([
      path.join(CFG.DIR.src, "*." + CFG.FILE.extension.markup.html)
    ])
    .pipe(assets)
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace({
      manifest: gulp.src(path.join(CFG.DIR.report, CFG.DIR.revManifest, CFG.DIR.style, CFG.FILE.config.revManifest))
    }))
    .pipe(gulp.dest(CFG.DIR.dist));
});
