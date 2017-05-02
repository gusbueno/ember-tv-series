import Ember from 'ember';

export default Ember.Route.extend({

    beforeModel: function(transition){
        console.log(transition.params["serie-detail"].serie_id);
    }
});
