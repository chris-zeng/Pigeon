import React from "react";
import { Form } from "react-bootstrap";
import { render } from "react-dom";
import L from "leaflet";
import { Map, TileLayer } from "react-leaflet";
import "./Map.css";
import { connect } from "react-redux";
import PigeonMarker from './PigeonMarker'

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: this.props.longitude,
      latitude: this.props.latitude,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (
      state.longitude !== props.longitude ||
      state.latitude !== props.latitude
    ) {
      return { latitude: props.latitude, longitude: props.longitude };
    }
  }

  render() {
    const center=[this.state.latitude, this.state.longitude];
    console.log("ORDERS", this.props.orders);
    return (
      <Map className="map" center={center} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.props.orders.length > 0 &&
          this.props.orders.map((order) => {
            const pos = [order.latitude, order.longitude];
            return (
              <PigeonMarker position={pos} order={order}/>                
            );
          })}
      </Map>
    );
  }
}

const mapStateToProps = state =>({
  longitude: state.geoLocation.longitude,
  latitude: state.geoLocation.latitude,
})
MapContainer = connect(mapStateToProps)(MapContainer);
export default MapContainer;
