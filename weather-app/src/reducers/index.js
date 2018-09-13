import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { cities, getForeCastDataFromCities as _getForeCastDataFromCities } from './cities';
import { city } from './city';

export default combineReducers({
    cities, // = myCities: cities,
    city, //currentCity: city
});

//selectores primarios o basicos... ahora usare selectores de la libreria selectors:
//export const getCity = state => (state.city); //obtengo solo city, para estar mas abstraido..
//export const getForeCastDataFromCities = state => (_getForeCastDataFromCities(state.cities, getCity(state)));

//Usando la libreria SELECTOR
export const getCity = createSelector(state => state.city, city => city);
export const getForeCastDataFromCities = createSelector(state => state.cities, getCity, _getForeCastDataFromCities);