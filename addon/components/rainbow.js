import Ember from "ember";

export default Ember.Component.extend({
  // layoutName: 'components/rainbow',
  classNames: ['ember-rainbow'],

  foo: function() {
    console.log('foo');
  }.on('didInsertElement')
});