import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';
import { getForeCastDataFromCities, getCity } from './../reducers';

class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            city && 
            <ForecastExtended city={city} forecastData={forecastData} /> //este es un presentational component
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

//usando destructuting, igualito a esto= const mapStateToProps = state => ({city1: state.city});
//const mapStateToProps = ({ city, cities }) => ({ city, forecastData: cities[city] && cities[city].forecastData }); 
const mapStateToProps = state => ({ city: getCity(state), forecastData: getForeCastDataFromCities(state) }); 

//este es un smart component, ya que mapStateToProps inyecta las propiedades en props de ForecastExtendedContainer
export default connect(mapStateToProps, null)(ForecastExtendedContainer); 