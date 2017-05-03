import DS from 'ember-data';

export default DS.Model.extend({
    "name": DS.attr('string'),
    "serieDetail": DS.belongsTo('serie-detail', { async: true })
});
