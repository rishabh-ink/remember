(function (window) {
  "use strict";

  require.config({
    baseUrl: "..",

    paths: {
      "jquery": [
        "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery",
        "bower_components/jquery/jquery"
      ],
      "moment": "bower_components/moment/moment",
      "moment-range": "bower_components/moment-range/lib/moment-range",
      "bragi": "bower_components/bragi/dist/bragi",
      "amplify": "bower_components/amplify/lib/amplify",
      "underscore": "bower_components/underscore/underscore", // TODO Migrate to Lo-Dash.
      "moment-precise-range": "bower_components/moment-precise-range/readable-range",
      "text": "bower_components/requirejs-text/text",
      "sightglass": "bower_components/sightglass/index",
      "rivets": "bower_components/rivets/dist/rivets",
      "underscore.string": "bower_components/underscore.string/lib/underscore.string",

      "app": "app/scripts/app"
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

    config: {
      moment: {
        noGlobal: true
      }
    }
  });

  require(["app"],
  function (App) {
    console.log(App.hello());
  });
})(window);
