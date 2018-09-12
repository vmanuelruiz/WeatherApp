import React, { Component } from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Row, Col} from 'react-flexbox-grid';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions';

import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Lima,pe',
  'Madrid,es',
  'Ciudad de México,mx',
  'Barcelona,es',
];


class App extends Component {

  constructor(){
    super();
    this.state = {city: null}; //esta asignacion con igual =, sola la puedo hacer en el constructor del componente
  }

  handleSelectedLocation = city => {
    this.setState({city}); // o city: city
    console.log(`handleSelectedLocation ${city}`);

    this.props.setCity(city);
  };

  render() {
    const {city} = this.state;
    return (
      <MuiThemeProvider> 
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='headline' color='inherit'>
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}>
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                  city && <ForecastExtended city={city}></ForecastExtended> //&& es para no renderizar nada si no hay nvalor en city
                }
              </div>
            </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;