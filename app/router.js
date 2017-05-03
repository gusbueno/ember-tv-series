import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('serie-detail', { path: '/serie-detail/:serie_id' });
  this.route('season-detail', { path: '/serie-detail/:serie_id/season/:season_number' });

});

export default Router;
