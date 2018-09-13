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

const mapStateToProps = ({ city }) => ({city}); //usando destructuting, igualito a esto= const mapStateToProps = state => ({city1: state.city});
export default connect(mapStateToProps, null)(ForecastExtendedContainer); //este es un smart component