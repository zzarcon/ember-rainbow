/* jshint node: true */
'use strict';

module.exports = {
  name: 'rainbow',

  included: function(app) {
    this._super.included(app);

    // app.import('bower_components/xbutton/dist/js/xbutton.js');
    // app.import('bower_components/xbutton/dist/css/xbutton.css');
  }
};