var gulp = require("gulp");
var CFG  = require("./utils/config.js");
var del  = require("del");

/**
 * clean
 * @see www.npmjs.org/package/del
 */
gulp.task("source:clean", del.bind(null, [
    CFG.DIR.npm,
    CFG.DIR.src,
    CFG.DIR.report,
    CFG.DIR.test
  ])
);
