var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  baseUrl: "/base",

  paths: {
    "jquery": "bower_components/jquery/jquery",
    "moment": "bower_components/moment/moment",
    "moment-range": "bower_components/moment-range/lib/moment-range",
    "jasmine-jquery": "bower_components/jasmine-jquery/lib/jasmine-jquery",
    "bragi": "bower_components/bragi/dist/bragi",
    "amplify": "bower_components/amplify/lib/amplify",
    "underscore": "bower_components/underscore/underscore", // TODO Migrate to Lo-Dash.
    "moment-precise-range": "bower_components/moment-precise-range/readable-range",
    "text": "bower_components/requirejs-text/text",
    "sightglass": "bower_components/sightglass/index",
    "rivets": "bower_components/rivets/dist/rivets",
    "underscore.string": "bower_components/underscore.string/lib/underscore.string",
    "jasmine-ajax": "bower_components/jasmine-ajax/lib/mock-ajax"
  },

  shim: {
    "amplify": {
      deps: [
        "jquery"
      ],
      exports: "amplify"
    },
    "underscore.string": {
      deps: [
          "underscore"
      ]
    }
  },

  deps: allTestFiles,

  callback: window.__karma__.start
});
