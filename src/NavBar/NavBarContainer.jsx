import React from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavBarContainer extends React.Component {
  render() {
    return (
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Pigeon</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">+Order</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search by location" className="mr-sm-2" />
          <Button variant="outline-light">Login</Button>
        </Form>
      </Navbar>
    );
  }
}
