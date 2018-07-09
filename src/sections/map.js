import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Section from 'components/section';

const Info = ({ text }) => <div>{text}</div>;

export default class Map extends Component {
  //   Static propTypes = {
  //     center: { lat: 51.5210954, lng: -0.0986382 },
  //     zoom: 11
  //   };

  render() {
    return (
      <Section>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Info lat={51.5210954} lng={-0.0986382} />
        </GoogleMapReact>
      </Section>
    );
  }
}
