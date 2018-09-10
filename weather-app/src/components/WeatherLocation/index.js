import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {SUN, WINDY} from './../../constants/weathers';
import './styles.css';

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