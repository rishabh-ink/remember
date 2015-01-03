var gulp = require("gulp");
var CFG  = require("./utils/config.js");
var $    = require("gulp-load-plugins")();
var path = require("path");
var pkg  = require(path.join("..", CFG.FILE.config.pkg));

/**
 * markup:build
 * @see www.npmjs.org/package/useref-file
 */
gulp.task("markup:build", [], function () {
  var assets = $.useref.assets({
    searchPath: [
      CFG.DIR.src
    ]
  });

  var markupFilter = $.filter([
    "*." + CFG.FILE.extension.markup.html
  ]);

  return gulp.src([
      path.join(CFG.DIR.src, "*." + CFG.FILE.extension.markup.html)
    ])
    .pipe(assets)
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe(gulp.dest(CFG.DIR.dist));
});
