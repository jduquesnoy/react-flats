import { Component } from 'react';
import React from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list';
import Marker from './marker';

import flats from '../../data/flats';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats,
    }
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }
  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }
   
  render() {
    return(
      <div>
        <div className="flat-list">
          <FlatList flats={this.state.flats}
           selectedFlat={this.state.selectedFlat}
           selectFlat={this.selectFlat}
          />
        </div>
        <div className="map-container">
        <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
