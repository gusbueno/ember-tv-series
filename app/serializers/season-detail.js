import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

    pushPayload(store, payload) {

        let included = [];
        payload.episodes.map((episode) => {

            included.push({"id": episode.id, "type": "episode", "attributes": {"name": episode.name, "episode-number": episode.episode_number, "air-date": episode.air_date}});

            episode["type"] = "episode";
            return episode;
        });

        let json = {
            "data": {
                "type": "season-detail",
                "id": payload.id,
                "attributes": {
                    "air-date": payload.air_date,
                    "name": payload.name,
                    "overview": payload.overview,
                    "poster-path": payload.poster_path,
                },
                "relationships": {
                    "episodes": {
                        "data": payload.episodes
                    }
                }
            },
            "included": included
        }
        console.log(json);
        return this._super(store, json);
    }
});
