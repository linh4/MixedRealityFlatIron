import React, { Component } from 'react';
import PlanetsContainer from './containers/PlanetsContainer'
import Location from './containers/Location'
import ImageContainer from './containers/ImageContainer/ImageContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Location />
        <PlanetsContainer />
        <ImageContainer />
      </div>
    );
  }
}

export default App;
