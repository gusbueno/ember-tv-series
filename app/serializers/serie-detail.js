import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

    pushPayload(store, payload) {
        let included = [];
        payload.genres.map((genre) => {

            included.push({"id": genre.id, "type": "genre", "attributes": {"name": genre.name} });

            genre["type"] = "genre";
            genre["id"] = genre.id;
            delete genre["name"];
            return genre;
        });

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
                    "number-of-seasons": payload.number_of_seasons
                },

                "relationships": {
                    "genres": {
                        "data": payload.genres
                    }
                }

            },
            "included": included
        };

        debugger;
        console.log(json);
        return this._super(store, json);
    }
});
