import DS from 'ember-data';

export default DS.Model.extend({

    "air_date": DS.attr('string'),
    "name": DS.attr('string'),
    "overview": DS.attr('string'),
    "poster_path": DS.attr('string'),
    "episodes": DS.hasMany('episode', { async: true })
});
