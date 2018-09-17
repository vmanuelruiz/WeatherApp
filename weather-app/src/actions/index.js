//import { Component } from "react";
import transformForecast from './../components/services/transformForecast';
import transformWeather from './../components/services/transformWeather';
import {api_key, url_base_weather, url_base_forecast} from './../constants/api_url';

//Aqui los action creator auxiliares:
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_CITY = `SET_CITY`;
export const SET_WEATHER = `SET_WEATHER`;
export const GET_WEATHER_CITY = `GET_WEATHER_CITY`;
export const SET_WEATHER_CITY = `SET_WEATHER_CITY`;

//A continuacion los action creators:
const setCity = value => ({type: SET_CITY, value}); //aqui estoy creando una accion
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });
const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});


export const setSelectedCity = payload => {
    return (dispatch, getState) => { //uso del 2do parametro de redux-thunk, en este caso la funcion getState
        const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;

        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        const now = new Date();

        if(date && (now - date) < 1 * 60 * 1000){ //si hace menos de 1 minuto se solicito el forecast, no se vuelve a hacer la peticion
            return;
        }
            
        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                //modificar el estado con el resultado de la promise (fetch)
                dispatch(setForecastData({city: payload, forecastData}));
            }
        );
    }
};

export const setWeather = payload => {
    //Aqui utilizo el middlware reduce thunk:
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));

            const api_weather = `${url_base_weather}?q=${city}&appid=${api_key}`;
            fetch(api_weather).then(
                data => {return data.json()}
            ).then(weather_data => {
                const weather = transformWeather(weather_data);
                //console.log(weather);
                dispatch(setWeatherCity({city, weather}));
            });
        });
    }
}