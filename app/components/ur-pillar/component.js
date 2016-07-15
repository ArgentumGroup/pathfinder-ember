import Ember from 'ember';

export default Ember.Component.extend({
  pillar: undefined,
  showInfo: false,

  actions: {
    showExtraInfo() {
      this.toggleProperty('showInfo');
    }
  }
});
