import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

    pushPayload(store, payload) {


        payload.results.map((serie) => {

            serie["attributes"] = {
                "poster-path": serie.poster_path,
                "popularity": serie.popularity,
                "backdrop-path": serie.backdrop_path,
                "vote-average": serie.vote_average,
                "overview": serie.overview,
                "first-air-date": serie.first_air_date,
                "vote-count": serie.vote_count,
                "name": serie.name,
                "original-name": serie.original_name,
                "original-language": serie.original_language
            };
            serie["type"] = "serie";
            return serie;
        });

        let json = {
            "data": payload.results
        };

        console.log(json);
        return this._super(store, json);
    }
});
