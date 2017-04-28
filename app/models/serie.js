import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
    id: DS.attr('number'),
    poster_path: DS.attr('string'),
    popularity: DS.attr('number'),
    backdrop_path: DS.attr('string'),
    vote_average: DS.attr('number'),
    overview: DS.attr('string'),
    first_air_date: DS.attr('string'),
    vote_count: DS.attr('number'),
    name: DS.attr('string'),
    original_name: DS.attr('string'),
    original_language: DS.attr('string')
});
