import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import { render } from "react-dom";
import GeoCode from "react-geocode";


GeoCode.setLanguage("en");
GeoCode.setRegion("es");

export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
            <NavBar />
            <Home />
      </React.Fragment>
    );
  }
}
