import Ember from 'ember';

export default Ember.Service.extend({

    store: Ember.inject.service(),
    ajax: Ember.inject.service(),
    series: null,
    baseUrl: null,
    apiKey: null,

    init() {
        //this.super(...arguments);
        this.set('series', []);
        this.set('baseUrl', 'https://api.themoviedb.org/3/search/tv');
        this.set('apiKey', '8fb4b0a5aef51d77af329bffc715e247');
    },

    getSeriesFromAPI(term) {
        let request = this.get('ajax').request(`${this.get('baseUrl')}?api_key=${this.get('apiKey')}&language=en-US&query=${term}`);

        request.then((payload) => {
            this.get('store').unloadAll('serie');
            this.get('store').pushPayload('serie', payload);
        }).catch((err) => {
            console.log(err);
            this.get('store').unloadAll('serie');
        });
    },
});
