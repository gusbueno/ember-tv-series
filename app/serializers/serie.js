import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

    pushPayload(store, payload) {

        payload.results.map((serie) => {
            return serie["type"] = "serie";
        });

        let json = {
            "data": payload.results
        };

        return this._super(store, json);
    }
});
