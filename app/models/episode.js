import DS from 'ember-data';

export default DS.Model.extend({

    "name": DS.attr('string'),
    "episode_number": DS.attr('number'),
    "air_date": DS.attr('string'),
    "seasonDetail": DS.belongsTo('season-detail', { async: true })
});
