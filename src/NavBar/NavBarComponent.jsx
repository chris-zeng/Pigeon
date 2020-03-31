import React, {useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";

import NewOrderModal from '../NewOrderModal'

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
        <NewOrderModal show={showNewOrder} onHide = {handleCloseNewOrder} />
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search by location"
          className="mr-sm-2"
        />
        <Button variant="outline-light" onClick={handleShowLogin}>
          Login
        </Button>
        <Modal show={showLogin} onHide={handleCloseLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
          <Form.Control type="email" placeholder="E-mail" />
          <Form.Control type="password" placeholder="Password" />
            <Button variant="primary" onClick={handleCloseLogin}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>

        <Button variant="outline-light" onClick={handleShowSignup}>
          Sign-up
        </Button>
        <Modal show={showSignup} onHide={handleCloseSignup}>
          <Modal.Header closeButton>
            <Modal.Title>Signup</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
          <Form.Control type="email" placeholder="E-mail" />
          <Form.Control type="password" placeholder="Password" />
          <Form.Control type="password" placeholder="Confirm Password" />

            <Button variant="primary" onClick={handleCloseLogin}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>

      </Form>
    </Navbar>
  );
}
