import React from "react";
import Map from "../Map";
import { connect } from "react-redux";
import { setGeoLocation } from "../actions/setGeoLocationAction";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: this.props.longitude,
      latitude: this.props.latitude,
      orders: [],
    };
  }
  __loadOrders = () => {
    fetch("https://pigeon2.herokuapp.com/readOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((res) => {
        console.log("fetched orders", res);
        this.setState({ orders: res });
      });
  };

  static getDerivedStateFromProps(props, state) {
    if (
      state.longitude !== props.longitude ||
      state.latitude !== props.latitude
    ) {
      return { latitude: props.latitude, longitude: props.longitude };
    }
    return {};
  }

  _setGeoLocation = ()=> {
    const initLat =43.653908
    const initLong = -79.384293

    this.props.setGeoLocation(initLat, initLong)
    /*
    navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          this.props.setGeoLocation(position.coords.latitude, position.coords.longitude);
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
      );*/
    //this.props.setGeoLocation();
  }

  componentDidMount() {
    this._setGeoLocation();
    this.__loadOrders();
  }
  render() {
    if (!this.state.longitude && !this.state.longitude) {
      return (
        <div>
          {" "}
          <h1>
            Please turn on location from your browser settings and refresh this
            page
          </h1>{" "}
        </div>
      );
    }
    return (
      <React.Fragment>
        <Map
          orders={this.state.orders}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  latitude: state.geoLocation.latitude,
  longitude: state.geoLocation.longitude,
});

HomeContainer = connect(mapStateToProps, {setGeoLocation})(HomeContainer);

export default HomeContainer;
