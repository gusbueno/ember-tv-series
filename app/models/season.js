import DS from 'ember-data';

export default DS.Model.extend({
    "serieDetail": DS.belongsTo('serie-detail', { async: true }),
    "air_date": DS.attr('string'),
    "episode_count": DS.attr('number'),
    "poster_path": DS.attr('string'),
    "season_number": DS.attr('number')
});
