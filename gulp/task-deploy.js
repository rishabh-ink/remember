var gulp = require("gulp");
var CFG  = require("./utils/config.js");
var $    = require("gulp-load-plugins")();
var path = require("path");
var pkg  = require(path.join("..", CFG.FILE.config.pkg));

/**
 * deploy
 * @see www.npmjs.org/package/gulp-gh-pages
 */
gulp.task("deploy", ["build"], function() {
  return gulp.src(path.join(CFG.DIR.dist, "**", "*"))
        .pipe($.ghPages({
          push: false
        }));
});
