import React from "react";
import logo from "./logo.svg";
import "./App.css";

import NavBar from "./NavBar";
import Home from './Home';

import { render } from 'react-dom'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home/>
    </React.Fragment>
  );
  
}

export default App;
