import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles/';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Lima,pe',
  'Madrid,es',
  'Ciudad de México,mx',
  'Barcelona,es',
];

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});


class App extends Component {

  render() {    
    return (
      <MuiThemeProvider theme={theme}> 
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
              <LocationListContainer cities={cities}></LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtendedContainer></ForecastExtendedContainer>
              </div>
            </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App; //retorno la mejora del componente App a la q agregrue nuevas propiedades