import Ember from 'ember';

export default Ember.Component.extend({

    init() {
        this._super(...arguments);
        debugger;
        console.log(this.get('info'));
    },
});
