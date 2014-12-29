module.exports = {
  DIR: {
    src: "app",
    dist: "dist",
    bower: "bower_components",
    npm: "node_modules",
    script: "scripts",
    style: "styles",
    image: "images",
    test: "tests",
    fixture: "fixtures",
    unit: "unit",
    vendor: "vendor",
    gulp: "gulp",
    asset: "assets",
    util: "utils",

    report: "report",
    coverage: "coverage",

    exclude: {
      markup: "!app/*.html",
      test: "!/**/test{,/**}" // Exclude test files; @see https://github.com/gulpjs/gulp/issues/165#issuecomment-32613179
    }
  }, // /DIR

  FILE: {
    config: {
      pkg: "package.json",
      scriptLint: ".jshintrc",
      bower: "bower.json",
      testMain: "main.js",
      karma: "karma.conf.js"
    },
    coverageReporter: {
      lcov: "lcov.info",
      junit: "junit.xml"
    },
    extension: {
      style: {
        css: "css"
      },
      script: {
        js: "js"
      },
      markup: {
        html: "html"
      },
      image: {
        jpg: "jpg",
        png: "png"
      }
    }
  } // /FILE
};
