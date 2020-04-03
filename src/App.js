import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import { render } from "react-dom";
import GeoCode from "react-geocode";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
GeoCode.setLanguage("en");
GeoCode.setRegion("es");

const store = createStore(()=>[], {}, applyMiddleware());

export default class App extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        localStorage.setItem("latitude", position.coords.latitude);
        localStorage.setItem("longitude", position.coords.longitude);
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <React.Fragment>
        <Provider store = {store}>
        <NavBar />
        <Home />
        </Provider>
      </React.Fragment>
    );
  }
}
