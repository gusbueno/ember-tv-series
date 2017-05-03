import DS from 'ember-data';

export default DS.Model.extend({
    "first_air_date": DS.attr('string'),
    "backdrop_path": DS.attr('string'),
    "name": DS.attr('string'),
    "overview": DS.attr('string'),
    "poster_path": DS.attr('string'),
    "number_of_episodes": DS.attr('number'),
    "number_of_seasons": DS.attr('number'),
    "genres": DS.hasMany('genre', {async: true}), // in order to access to genres from template
    "seasons": DS.hasMany('season', {async: true})
});
