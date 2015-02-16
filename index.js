/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-rainbow',

  included: function(app) {
    this._super.included(app);

    // app.import(app.bowerDirectory + '/ember-validatiors/ember-validators.js');
  }
};