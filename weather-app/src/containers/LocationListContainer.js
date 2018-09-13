import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setCity} from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    handleSelectedLocation = city => {
        this.props.setCity(city);
      };

    render() {
        return (
            <LocationList
                cities={this.props.cities}
                onSelectedLocation={this.handleSelectedLocation}>
          </LocationList> //este es un presentational component
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired, //Valido que setCity sea una funcion requerida
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => (
    {
      setCity: value => dispatch(setCity(value))
    }
  );

//retorno la mejora del componente App a la q agregrue nuevas propiedades, ahora se lo llama smart component
export default connect(null, mapDispatchToProps)(LocationListContainer);