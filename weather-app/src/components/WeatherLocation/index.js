import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../services/transformWeather';
import {api_weather} from './../../constants/api_url';
import {SUN} from './../../constants/weathers';
import './styles.css';

//SOLID
//S = Single Responsability
//O = 
//L = 
//I = 
//D = 

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
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
            const newWeather = transformWeather(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather,
            });
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