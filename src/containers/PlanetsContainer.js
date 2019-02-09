import React, { Component } from 'react';
import Planets from '../components/Planets'

class PlanetsContainer extends Component {
  render() {
    return(
    <div>
      Hello from the outside
    <Planets />
  </div>
    )
  }
}

export default PlanetsContainer
