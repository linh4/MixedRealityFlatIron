import React, { Component } from 'react';
// import PlanetsContainer from './containers/PlanetsContainer'
// import Location from './containers/Location'
import ImageContainer from './containers/ImageContainer/ImageContainer'
import {geolocated} from 'react-geolocated';

class Main extends Component {

  render() {
      return !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
          ? <div>Geolocation is not enabled</div>
          : this.props.coords
            ? <ImageContainer lat={this.props.coords.latitude} long={this.props.coords.longitude} />
            : <div>Getting the location data&hellip; </div>;
    }
  }

  export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(Main);
