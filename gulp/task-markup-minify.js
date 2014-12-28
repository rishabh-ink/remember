var gulp = require("gulp");
var CFG  = require("./utils/config.js");
var $    = require("gulp-load-plugins")();
var path = require("path");
var pkg  = require(path.join("..", CFG.FILE.config.pkg));

/**
 * markup:minify
 * @see www.npmjs.org/package/useref
 */
gulp.task("markup:minify", [], function () {
  var assets = $.useref.assets({
    searchPath: [
      "app"
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
    // .pipe(markupFilter)
    // .pipe($.minifyHtml({
    //   conditionals: true,
    //   loose: true
    // }))
    // .pipe(markupFilter.restore())
    .pipe(gulp.dest(CFG.DIR.dist));
});
