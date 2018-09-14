import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from './../actions';
import {getWeatherCities, getCity} from './../reducers';
import LocationList from './../components/LocationList';


class LocationListContainer extends Component {

    componentDidMount() {
        const {setWeather, setSelectedCity, cities, city} = this.props;
        setWeather(cities);
        setSelectedCity(city);
    }

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
    };

    render() {
        return (
            <LocationList
                cities={this.props.citiesWeather}
                onSelectedLocation={this.handleSelectedLocation}>
          </LocationList> //este es un presentational component
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    //setCity: PropTypes.func.isRequired, //Valido que setCity sea una funcion requerida
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
/*const mapDispatchToProps = dispatch => ({
      setCity: value => dispatch(setSelectedCity(value)),
      setWeather: cities => dispatch(setWeather(cities))
    }
  );*/

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state),
});

//retorno la mejora del componente App a la q agregrue nuevas propiedades, ahora se lo llama smart component
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);

//mapDispatchTOProps: nos va a dar aquellas propeidades q van a ajecutar acciines y q permiten alterrarr el estado de la app
//mapStateToProps , va a ser invocado, para setar nuevos valores de propeidades y al hacerlo, se hace una rerenderizacion automatica
