import Ember from 'ember';

export default Ember.Component.extend({
  city: undefined,
  showInfo: false,

  actions: {
    showExtraInfo() {
      this.toggleProperty('showInfo');
    }
  }
});
