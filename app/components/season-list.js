import Ember from 'ember';

export default Ember.Component.extend({
    init() {
        this._super(...arguments);
    },

    seasonsWithoutZero: Ember.computed.filter("seasons", function(event) {
        return event.get('season_number') != 0;
    }),

    actions: {
        gotoSeasonDetail() {}
    }
});
