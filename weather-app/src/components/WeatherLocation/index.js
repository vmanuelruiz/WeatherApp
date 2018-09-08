import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {SUN} from './../../constants/weathers';
import './styles.css';

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

class WeatherLocation extends Component { 
    render = () =>(
        <div className='weatherLocationCont'>
            <Location city={'Granada!'}></Location>
            <WeatherData data={data}></WeatherData>
        </div>
    );
};

export default WeatherLocation;