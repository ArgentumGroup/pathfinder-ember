import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ur', function() {
    this.route('cities');
    this.route('pillars');
  });
  this.route('characters');
  this.route('reference');
});

export default Router;
