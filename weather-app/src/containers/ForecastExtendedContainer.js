import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city && 
            <ForecastExtended city={this.props.city}></ForecastExtended> //este es un presentational component
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

//usando destructuting, igualito a esto= const mapStateToProps = state => ({city1: state.city});
const mapStateToProps = ({ city }) => ({ city }); 

//este es un smart component, ya que mapStateToProps inyecta las propiedades en props de ForecastExtendedContainer
export default connect(mapStateToProps, null)(ForecastExtendedContainer); 