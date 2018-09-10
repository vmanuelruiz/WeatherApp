import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {SUN, WINDY} from './../../constants/weathers';
import './styles.css';

const location = 'Buenos Aires,ar';
const api_key = '42cb6505fb56f3a2d5635064d0664327';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;


const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 20,
    wind: '10 m/s',
};

class WeatherLocation extends Component { 

    constructor(){ //siempre se debe invocar al componente base con super
        super();
        this.state = {
            city: "Buenos Aires",
            data: data,
        };
    }

    handleUpdateClic = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            console.log(data);
            debugger;
        });

        console.log('actualizado');
        this.setState({
            city: 'Buenos Aires!',
            data: data2,
        });
    };

    render = () =>{
        const {city, data} = this.state;
        return (
        <div className='weatherLocationCont'>
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClic}>Actualizar</button>
        </div>
        );
    };
};

export default WeatherLocation;