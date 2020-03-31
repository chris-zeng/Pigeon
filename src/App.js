import React from "react";
import logo from "./logo.svg";
import "./App.css";

import NavBar from "./NavBar";
import Home from './Home';

import { render } from 'react-dom';

import GeoCode from "react-geocode";

GeoCode.setLanguage("en");
GeoCode.setRegion("es");


export default class App extends React.Component{
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        localStorage.setItem('latitude', position.coords.latitude);
        localStorage.setItem('longitude', position.coords.longitude);

      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 },
    );
  }
  render(){return (
    <React.Fragment>
      <NavBar />
      <Home/>
    </React.Fragment>
  );
  }
}

