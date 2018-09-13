//import { Component } from "react";
import transformForecast from './../components/services/transformForecast';

export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_CITY = `SET_CITY`;

const setCity = value => ({type: SET_CITY, value}); //aqui estoy creando una accion
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });
const api_key = '42cb6505fb56f3a2d5635064d0664327';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

export const setSelectedCity = payload => {

    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

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