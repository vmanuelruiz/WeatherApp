import { createSelector } from 'reselect';
import {SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY} from './../actions';

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA: {
            const { city, forecastData } = action.payload;
            return { ...state, [city]: {forecastData: forecastData, weather: null}};
        }

        case GET_WEATHER_CITY: {
            const city = action.payload;
            return {...state, [city]:{weather: null}};
        }

        case SET_WEATHER_CITY: {
            const { city, weather } = action.payload;
            return {...state, [city]: {weather: weather}};
        }

        default:
            return state;
    }
}

//AQUI HAGO EL SELECTOR XQ ES EL LUGAR INDICADO YA QUE AQUI SE CONOCE LA ESTRUCTURA DEL ESTADO DEL REDUCER..
//Este selector obtiene el forecast data para la ciudad que le mande..
//export const getForeCastDataFromCities = (state, city) => state[city] && state[city].forecastData;

export const getForeCastDataFromCities = 
createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);