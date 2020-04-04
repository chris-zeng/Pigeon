import React, { useState } from "react";
import { Navbar, Nav, Form, Button, Modal } from "react-bootstrap";

import NewOrderModal from "../NewOrderModal";
import SignUpModal from "../SignUpModal";
import LoginModal from "../LoginModal";
import LocationSearchInput from "./../common/component/LocationSearchInput";

import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBarComponent(props) {
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showSignup, setShowSignup] = useState(false);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  const [showNewOrder, setShowNewOrder] = useState(false);
  const handleCloseNewOrder = () => setShowNewOrder(false);
  const handleShowNewOrder = () => setShowNewOrder(true);

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Pigeon</Navbar.Brand>
      <Nav className="mr-auto">
        <Button variant="outline-light" onClick={handleShowNewOrder}>
          +Order
        </Button>
        <NewOrderModal show={showNewOrder} onHide={handleCloseNewOrder} />
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
    </Navbar>
  );
}
