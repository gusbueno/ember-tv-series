import Ember from 'ember';
import _ from 'lodash';

export default Ember.Route.extend({

    model() {
        return this.get('store').peekAll('serie');
    },

    seriesService: Ember.inject.service('serie-list'),

    actions: {
        handleSearch: _.debounce(function(term) {
            console.log(term);
            this.get('seriesService').getSeriesFromAPI(term);
        }, 300),

        gotoSerieDetail(serie) {
            this.get('router').transitionTo('serie-detail', serie.get('id'));
        }
    }
});
