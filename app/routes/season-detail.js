import Ember from 'ember';

export default Ember.Route.extend({

    season_number: null,
    season_id: null,
    serie_id: null,
    seasonDetailService: Ember.inject.service('season-detail'),

    beforeModel: function(transition) {
        this.set('serie_id', transition.params['season-detail'].serie_id);

        this.set('season_number', transition.params['season-detail'].season_number);
        return this.get('seasonDetailService').getSeasonDetailFromAPI(this.get('serie_id'), this.get('season_number'))
            .then((payload) => {
                this.set('season_id', payload.id);
            });
    },

    model() {
        return this.get('store').peekRecord('season-detail', this.get('season_id'));
    },
    actions: {
        goToSerieDetail() {
            this.transitionTo('serie-detail', this.get('serie_id'));
        }
    }
});
