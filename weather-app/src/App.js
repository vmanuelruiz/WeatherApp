import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Barcelona,es',
];

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  };

  render() {
    return (
      <div className="App">
        <LocationList cities={cities}
        onSelectedLocation={this.handleSelectedLocation} />
      </div>
    );
  }
}

export default App;