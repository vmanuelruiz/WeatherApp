import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../services/transformWeather';
import {api_weather} from './../../constants/api_url';
import './styles.css';

//SOLID
//S = Single Responsability
//O = 
//L = 
//I = 
//D = 

class WeatherLocation extends Component { 

    constructor(){ //siempre se debe invocar al componente base con super
        super();
        this.state = {
            city: "Buenos Aires",
            data: null,
        };
        console.log('constructor');
    }

    componentDidMount() { //cdu
        //Funcion que siempre se ejecuta una primera vez, y no hay como obviar esa primera vez
        //luego llama a handleupdateclic
        console.log('componentDidMount');
        this.handleUpdateClic();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }
    
    

    handleUpdateClic = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            //debugger;
            this.setState({
                //Aqui detallo solo las variables que se que han cambiado o 
                // que tienen valroes nuevos
                data: newWeather,
            });
        });
        
    };

    render = () =>{
        const {city, data} = this.state;
        return (
        <div className='weatherLocationCont'>
            <Location city={city}></Location>
            {data ? 
                <WeatherData data={data}></WeatherData> : //parte de SI del IF
                <CircularProgress size={50}></CircularProgress>
            }
        </div>
        );
    };
};
//<button onClick={this.handleUpdateClic}>Actualizar</button>
export default WeatherLocation;