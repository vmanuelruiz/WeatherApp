import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../services/transformWeather';
import './styles.css';

//SOLID
//S = Single Responsability
//O = 
//L = 
//I = 
//D = 

class WeatherLocation extends Component { 

    constructor(props){ //siempre se debe invocar al componente base con super
        super(props);
        const {city} = props;

        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() { //cdu
        //Funcion que siempre se ejecuta una primera vez, y no hay como obviar esa primera vez
        //luego llama a handleupdateclic
        //console.log('componentDidMount');
        this.handleUpdateClic();
    }

    componentDidUpdate(prevProps, prevState) {
       // console.log('componentDidUpdate');
    }
    
    handleUpdateClic = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            //console.log(newWeather);
            //debugger;
            this.setState({
                //Aqui detallo solo las variables que se que han cambiado o 
                // que tienen valroes nuevos
                data: newWeather,
            });
        });
    };

    render = () =>{
        const {onWeatherLocationClic} = this.props;
        const {city, data} = this.state;
        return (
        <div className='weatherLocationCont' onClick={onWeatherLocationClic}>
            <Location city={city}></Location>
            {data ? 
                <WeatherData data={data}></WeatherData> : //parte de SI del IF
                <CircularProgress size={50} /> //parte del else del IF
            }
        </div>
        );
    };
}
//<button onClick={this.handleUpdateClic}>Actualizar</button>

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClic: PropTypes.func,
}

export default WeatherLocation;