module.exports.views = {
  extension: "pug",

  "getRenderFn": function() {
      var cons = require("consolidate");

      return cons.pug;
  },

  layout: false
};