"use strict";

var $    = require("gulp-load-plugins")();
var gulp = require("gulp");
var notify = require("./gulp/utils/notify");

/**
 * Load all tasks from the gulp directory.
 */
require("require-dir")("gulp");


/**
 * Build
 * Creates a build artifact, ready for deployment.
 */
gulp.task("build", ["style:compile", "markup:minify", "script:minify", "image:minify", "source"], function(callback) {
  notify.showNotification({
    subtitle: "Task build",
    message: "Build complete!"
  });

  callback();
});


/**
 * Default
 * Lists all available tasks.
 */
gulp.task("default", function () {
  $.util.log("Available tasks:");
  Object.keys(gulp.tasks).forEach(function (taskName) {
    $.util.log("\t", $.util.colors.yellow(taskName));
  });
  $.util.log("Use", $.util.colors.green("gulp serve"), "to get started.");
});
