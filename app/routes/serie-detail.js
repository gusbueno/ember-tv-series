import Ember from 'ember';

export default Ember.Route.extend({

    serie_id: null,
    serieDetailService: Ember.inject.service('serie-detail'),

    beforeModel: function(transition) {
        this.set('serie_id', transition.params['serie-detail'].serie_id);
        return this.get('serieDetailService').getSerieDetailFromAPI(this.get('serie_id'));
    },

    model() {
        return this.get('store').peekRecord('serie-detail', this.get('serie_id'));
    },

    actions: {
        gotoSeasonDetail(season) {
            this.transitionTo('season-detail', this.get('serie_id'), season.get('season_number'));
        }
    }
});
