import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

//SOLID
//S = Single Responsability
//O = 
//L = 
//I = 
//D = 

/**
 *   
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
                // que tienen valores nuevos
                data: newWeather,
            });
        });
    };

        componentDidMount() { //cdu
        //Funcion que siempre se ejecuta una primera vez, y no hay como obviar esa primera vez
        //luego llama a handleupdateclic
        //console.log('componentDidMount');
        this.handleUpdateClic();
    }

    componentDidUpdate(prevProps, prevState) {
       // console.log('componentDidUpdate');
    }
 * 
 */

const WeatherLocation = ({ onWeatherLocationClic, city, data}) => (  
    //componentWillMount muy probablemente sea deprecated, en su lugar se prefiere el
    //ComponentDidMount, ademas que willmount no t asegura q solo se ejecutara una sola vez..
    <div className='weatherLocationCont' onClick={onWeatherLocationClic}>
        <Location city={city}></Location>
        {
            data ? 
            <WeatherData data={data} /> : //parte de SI del IF
            <CircularProgress size={50} thickness={7} /> //parte del else del IF
        }
    </div>
);
//<button onClick={this.handleUpdateClic}>Actualizar</button>

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClic: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherLocation;