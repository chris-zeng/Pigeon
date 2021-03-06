import React, { useState } from "react";
import { Navbar, Nav, Form, Button, Modal } from "react-bootstrap";

import NewOrderModal from "../NewOrderModal";
import SignUpModal from "../SignUpModal";
import LoginModal from "../LoginModal";
import About from "../About";
import LocationSearchInput from "./../common/component/LocationSearchInput";

import "bootstrap/dist/css/bootstrap.min.css";
import { popup } from "leaflet";

export default function NavBarComponent(props) {
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showSignup, setShowSignup] = useState(false);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  const [showNewOrder, setShowNewOrder] = useState(false);
  const handleCloseNewOrder = () => setShowNewOrder(false);
  const handleShowNewOrder = () => {
    if (props.isAuthenticated) setShowNewOrder(true);
    else {
      alert("Please log in!");
    }
  };

  const [showAbout, setShowAbout] = useState(false);
  const handleCloseAbout = () => setShowAbout(false);
  const handleShowAbout = () => setShowAbout(true);

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Pigeon</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Button variant="outline-light" onClick={handleShowNewOrder}>
            +Order
          </Button>
          <NewOrderModal show={showNewOrder} onHide={handleCloseNewOrder} />
          <Button variant="outline-light" onClick={handleShowAbout}>
            How to use?
          </Button>
          <About show={showAbout} onHide={handleCloseAbout} />
        </Nav>
        <Form inline>
          <LocationSearchInput
            handleSelect={props.handleLocationSearchInputSelect}
          />

          {!props.isAuthenticated ? (
            <>
              <Button variant="outline-light" onClick={handleShowLogin}>
                Login
              </Button>
              <LoginModal show={showLogin} onHide={handleCloseLogin} />
              <Button variant="outline-light" onClick={handleShowSignup}>
                Sign-up
              </Button>
              <SignUpModal show={showSignup} onHide={handleCloseSignup} />
            </>
          ) : (
            <>
              <Button variant="outline-light" onClick={props.onClickLogout}>
                Logout
              </Button>
            </>
          )}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
