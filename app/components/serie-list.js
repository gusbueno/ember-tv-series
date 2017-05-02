import Ember from 'ember';

export default Ember.Component.extend({

    init() {
        this._super(...arguments);
        console.log(this.get('series'));
    },

    onGotoSerieDetail: 'gotoSerieDetail',

    actions: {
        gotoSerieDetail(serie) {
            this.sendAction('onGotoSerieDetail', serie);
        }
    }
});
