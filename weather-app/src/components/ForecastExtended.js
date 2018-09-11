import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

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

class ForecastExtended extends Component{

    rederForecastItemDays(){
        return days.map(day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>));
    }

    render(){
        const {city} = this.props;
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
                {this.rederForecastItemDays()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;