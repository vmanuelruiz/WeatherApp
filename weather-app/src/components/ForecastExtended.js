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
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        //Punto previo al establecimiento de las propiedades y previo a la actualizacion del componente
        // se ejecuta siempre que se modifican las propiedades, excepto la primera vez q se establece el componente, por eso
        // es necesario ejecutar el updateCity en el componente DidMount arriba
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }

    }

    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
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

    rederForecastItemDays(forecastData){
        //return days.map(day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>));
        //return <h1>render items</h1>;
        return forecastData.map(forecast => (
            <ForecastItem key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour}
            data={forecast.data}>
            </ForecastItem>
        ))

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
                        this.rederForecastItemDays(forecastData) :
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