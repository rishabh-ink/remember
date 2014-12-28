var notifier = new require("node-notifier")({});
var extend   = require("extend");

module.exports = {
  defaults: {
    title: "UI Elements"
  },

  showNotification: function (options) {
    extend(options, this.defaults);

    if("undefined" !== typeof(process.env.UI_ELEMENTS_CI)) {
      // Running inside a CI environment, do not show notifications
      console.log("[notification]", options.message);
    } else {
      // Running inside a non-CI environment, okay to show notifications
      notifier.notify(options);
    }
  },

  appIcon: {
    sass: __dirname + "/asset/image/sass-logo.png",
    karma: __dirname + "/asset/image/karma-logo.png"
  }
};
