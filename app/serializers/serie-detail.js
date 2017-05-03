import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

    pushPayload(store, payload) {
        debugger;
        let included = [];
        payload.genres.map((genre) => {

            included.push({"id": genre.id, "type": "genre", "attributes": {"name": genre.name} });

            genre["type"] = "genre";
            genre["id"] = genre.id;
            delete genre["name"];
            return genre;
        });

        payload.seasons.map((season) => {

            included.push({ "id": season.id, "type": "season", "attributes": { "air-date": season.air_date, "episode-count": season.episode_count, "poster-path": season.poster_path, "season-number": season.season_number } });

            season["type"] = "season";
            delete season["air_date"];
            delete season["episode_count"];
            delete season["poster_path"];
            delete season["season_number"];
            return season;
        })

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
                    },
                    "seasons": {
                        "data": payload.seasons
                    }
                }

            },
            "included": included
        };

        console.log(json);
        return this._super(store, json);
    }
});
