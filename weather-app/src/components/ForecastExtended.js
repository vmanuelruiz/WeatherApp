import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './services/transformForecast';
import './styles.css';

/*
const data = {
    temperature:10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}

const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
];
*/

const api_key = '42cb6505fb56f3a2d5635064d0664327';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component{

    constructor(){
        super();
        this.state = {forecastData: null}
    }

    componentDidMount(){
        //fecth or axios (una libreria que cubre navegadores mas antiguos y actuales)
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        );

    }

    rederForecastItemDays(){
        //return days.map(day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>));
        return <h1>render items</h1>;
    }

    renderProgress = () => {
        return <h3>Cargando pronóstico extendido...</h3>;
    }

    render(){
        const {city} = this.props;
        const {forecastData} = this.state; //desde el state se la optiene xq no se la recibe por parametro
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
                {
                    forecastData ?
                        this.rederForecastItemDays() :
                        this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;