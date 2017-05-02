import Ember from 'ember';

export default Ember.Component.extend({

    init() {
        this._super(...arguments);
    },

    actions: {
        handleSearch(term) {
            this.sendAction('onSearch', term);
        }
    }

});
