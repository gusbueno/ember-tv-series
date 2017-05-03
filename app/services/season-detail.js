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

    getSeasonDetailFromAPI(serie_id, season_number) {
        let request = this.get('ajax').request(`${this.get('baseUrl')}/${serie_id}/season/${season_number}?api_key=${this.get('apiKey')}&language=en-US`);

        this.get('store').unloadAll('season-detail');
        request.then((payload) => {
            this.get('store').pushPayload('season-detail', payload);
        }).catch((err) => {
            console.log(err);
        });

        return request;
    },
});
