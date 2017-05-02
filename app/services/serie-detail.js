import Ember from 'ember';

export default Ember.Service.extend({

    store: Ember.inject.service(),
    ajax: Ember.inject.service(),
    baseUrl: null,
    apiKey: null,

    init() {
        this.set('baseUrl', 'https://api.themoviedb.org/3/tv');
        this.set('apiKey', '8fb4b0a5aef51d77af329bffc715e247');
    },

    getSerieDetailFromAPI(serie_id) {
        let request = this.get('ajax').request(`${this.get('baseUrl')}/${serie_id}?api_key=${this.get('apiKey')}&language=en-US`);

        //this.get('store').unloadAll('serie-detail');
        return request.then((payload) => {
            this.get('store').pushPayload('serie-detail', payload);
        }).catch((err) => {
            console.log(err);
        });
    },
});
