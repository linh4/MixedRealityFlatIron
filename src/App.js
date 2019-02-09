import React, { Component } from 'react';
import PlanetsContainer from './containers/PlanetsContainer'
import Location from './containers/Location'

class App extends Component {
  render() {
    return (
      <div>
        <Location />
        <PlanetsContainer />
      </div>
    );
  }
}

export default App;
