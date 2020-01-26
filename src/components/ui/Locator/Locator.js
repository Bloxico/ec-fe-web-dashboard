// flow

import React from 'react';
import { geolocated } from 'react-geolocated';
import Loader from '../Loader';

class Demo extends React.Component {
  componentDidUpdate(): void {
    if (
      this.props.coords &&
      this.props.coords.latitude &&
      this.props.coords.longitude
    )
      this.props.onChange({
        location: {
          latitude: this.props.coords.latitude,
          longitude: this.props.coords.longitude,
        },
      });
  }

  render() {
    return !this.props.isGeolocationAvailable ? (
      ''
    ) : !this.props.isGeolocationEnabled ? (
      <Loader />
    ) : this.props.coords ? (
      <div>{this.props.coords.latitude}</div>
    ) : (
      ''
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
  suppressLocationOnMount: true,
})(Demo);
