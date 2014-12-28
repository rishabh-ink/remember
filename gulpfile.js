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
 * Runs style-related, script-related and image-related tasks to create a
 * distribution directory at `/dist`.
 */
gulp.task("build", ["style:compile", "markup:minify", "script:minify", "image:minify", "source"], function(callback) {
  notify.showNotification({
    subtitle: "Task build",
    message: "Build complete! See ./dist for artifacts."
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
  $.util.log("Use", $.util.colors.green("gulp build"), "to get started.");
});
