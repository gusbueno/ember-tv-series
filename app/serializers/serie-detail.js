import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

    pushPayload(store, payload) {
        let json = {
            "data": {
                "type": "serie-detail",
                "id": payload.id,
                "attributes": {
                    "first-air-date": payload.first_air_date,
                    "backdrop-path": payload.backdrop_path,
                    "name": payload.name,
                    "overview": payload.overview,
                    "poster-path": payload.poster_path,
                    "number-of-episodes": payload.number_of_episodes,
                    "number-of-seasons": payload.number_of_seasons,
                    //"genre": payload.genres,
                    /*

                    "seasons": payload.seasons
                    */
                }
            },
            relationships: {
                genre: {
                    data: payload.genres
                }
            }
        };

        console.log(json);
        return this._super(store, json);
    }
});
