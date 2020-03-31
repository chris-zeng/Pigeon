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
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBarComponent(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Pigeon</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">+Order</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search by location"
          className="mr-sm-2"
        />
        <Button variant="outline-light" onClick={handleShow}>
          Login
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
          <Form.Control type="email" placeholder="E-mail" />
          <Form.Control type="password" placeholder="Password" />
            <Button variant="secondary" onClick={handleClose}>
              Sign-Up
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </Navbar>
  );
}
