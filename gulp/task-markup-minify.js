var gulp = require("gulp");
var CFG  = require("./utils/config.js");
var $    = require("gulp-load-plugins")();
var path = require("path");
var pkg  = require(path.join("..", CFG.FILE.config.pkg));

/**
 * markup:minify
 * @see www.npmjs.org/package/useref
 */
gulp.task("markup:minify", ["markup:revise"], function () {
  return gulp.src([
      path.join(CFG.DIR.dist, "*." + CFG.FILE.extension.markup.html)
    ])
    .pipe($.vulcanize({
      dest: CFG.DIR.dist,
      csp: true,
      strip: true
    }))
    .pipe(gulp.dest(CFG.DIR.dist));
});
