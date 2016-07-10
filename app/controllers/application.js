import Ember from 'ember';

export default Ember.Controller.extend({
  formToggle: true,

  actions: {
    toggleForm: function() {
      this.toggleProperty('formToggle');
    }
  }
});
