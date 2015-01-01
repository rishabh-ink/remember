var gulp = require("gulp");
var CFG  = require("./utils/config.js");
var $    = require("gulp-load-plugins")();
var path = require("path");
var pkg  = require(path.join("..", CFG.FILE.config.pkg));
var notify = require("./utils/notify-style-compile");

/**
 * style:compile
 * @see www.npmjs.org/package/gulp-sass
 */
gulp.task("style:compile", function() {
  return gulp.src([
      path.join(CFG.DIR.src, "**", "*." + CFG.FILE.extension.style.scss)
    ])
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: "compressed"
    }))
    .pipe($.sourcemaps.write())
    .on("error", function(error) {
      if("undefined" !== typeof(process.env.REMEMBER_CI)) {
        // Running inside a CI environment, break the build
        throw new Error(error);
      } else {
        // Running inside a non-CI environment, show notifications
        notify(error);
      }
    })
    .pipe(gulp.dest(CFG.DIR.dist));
});
