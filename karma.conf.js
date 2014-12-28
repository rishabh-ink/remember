// Karma configuration
// karma-runner.github.io

module.exports = function(config) {
  var CFG = require("./gulp/utils/config.js");
  var path = require("path");

  config.set({
    basePath: "",

    frameworks: [
      "jasmine",
      "requirejs"
    ],

    files: [
      // Bower components
      { pattern: path.join(CFG.DIR.bower, "amplify", "lib", "amplify.js"), included: false },
      { pattern: path.join(CFG.DIR.bower, "bragi", "dist", "bragi.js"), included: false },
      { pattern: path.join(CFG.DIR.bower, "jasmine-jquery", "lib", "jasmine-jquery.js"), included: false },
      { pattern: path.join(CFG.DIR.bower, "jquery", "jquery.js"), included: false },
      { pattern: path.join(CFG.DIR.bower, "moment", "moment.js"), included: false },
      { pattern: path.join(CFG.DIR.bower, "moment-precise-range", "readable-range.js"), included: false },
      { pattern: path.join(CFG.DIR.bower, "moment-range", "lib", "moment-range.js"), included: false },
      { pattern: path.join(CFG.DIR.bower, "requirejs-text", "text.js"), included: false },
      { pattern: path.join(CFG.DIR.bower, "rivets", "dist", "rivets.js"), included: false },
      { pattern: path.join(CFG.DIR.bower, "sightglass", "index.js"), included: false },
      { pattern: path.join(CFG.DIR.bower, "underscore", "underscore.js"), included: false },
      { pattern: path.join(CFG.DIR.bower, "underscore.string", "lib", "underscore.string.js"), included: false },
      { pattern: path.join(CFG.DIR.bower, "jasmine-ajax", "lib", "mock-ajax.js"), included: false },

      // Scripts
      { pattern: path.join(CFG.DIR.src, CFG.DIR.script, "**", "*.js"), included: false },

      // RequireJS config for loading sources and tests
      { pattern: path.join(CFG.DIR.test, CFG.FILE.config.testMain) },

      // Test fixtures
      { pattern: path.join(CFG.DIR.test, "**", "*"), included: false }
    ],

    exclude: [
    ],

    reporters: [
      "spec",
      "coverage",
      "junit"
    ],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: [
      "PhantomJS"
    ],

    singleRun: false,

    coverageReporter: {
      reporters: [{
        type: "lcov",
        dir: path.join(CFG.DIR.report, CFG.DIR.test)
      }]
    },

    junitReporter: {
      outputFile: path.join(CFG.DIR.report, CFG.DIR.test, CFG.FILE.coverageReporter.junit),
      suite: ""
    },

    specReporter: {
       suppressPassed: false,
       suppressFailed: false,
       suppressSkipped: false
    },

    preprocessors: {
      "app/scripts/*.js": [
        "coverage"
      ]
    }
  });
};
