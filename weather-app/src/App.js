import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';

class App extends Component {
  render() {
    //console.log("debug");
    return (
      <div className="App">
        <WeatherLocation> </WeatherLocation>
      </div>
    );
  }
}

export default App;
