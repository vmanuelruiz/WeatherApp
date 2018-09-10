import React, { Component } from 'react';
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
  render() {
    return (
      <div className="App">
        <LocationList cities={cities} />
      </div>
    );
  }
}

export default App;