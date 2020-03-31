import React from "react";
import { Form, FormControl, Button, Modal, Col, Row } from "react-bootstrap";

export default class NewOrderModalContainer extends React.Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
        show: true,
        address:"",
        
    });
  };

  render() {
    console.log(this.props);
    if (!this.props.show) {
      return null;
    }
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Place an new order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control name="address" placeholder="Address" />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Suite</Form.Label>
              <Form.Control name="suite" placeholder="Suite #" />
            </Form.Group>

            <Button>add item</Button>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>item name</Form.Label>
              <Form.Control name="suite" placeholder="item name" />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>item name</Form.Label>
              <Form.Control name="suite" placeholder="item name" />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>item name</Form.Label>
              <Form.Control name="suite" placeholder="item name" />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>item name</Form.Label>
              <Form.Control name="suite" placeholder="item name" />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>item name</Form.Label>
              <Form.Control name="suite" placeholder="item name" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Form.Group controlId="formGridAddress1">
              <Form.Label>Approxmate total price</Form.Label>
              <Form.Control name="suite" placeholder="Approxmate total price" />
            </Form.Group>
        <Modal.Footer>
          <Button>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
