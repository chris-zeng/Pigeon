import React from "react";
import { Form, FormControl, Button, Modal, Col, Row } from "react-bootstrap";

class Item extends React.Component {
  render() {
    const { name, itemTextChanged } = this.props;
    return (
      <Form.Group controlId="formGridAddress1">
        <Form.Control
          id={name}
          type="text"
          className="validate flow-text"
          onChange={this.props.onChange}
        />
      </Form.Group>
    );
  }
}

export default class NewOrderModalContainer extends React.Component {
  state = {
    show: this.props.show,
    address: "",
    itemsInputs: [],
    itemsValues: {},
  };
  showModal = e => {
    this.setState({
      show: true
    });
  };

  itemTextChanged = (e)=>{
    let {itemsValues} = this.state;
    itemsValues[e.target.id] = e.target.value
  }

  addItem = item => {
    let name = `item-${Object.keys(this.state.itemsInputs).length}`
    let newItemInput = <Item name={name}  onChange ={this.itemTextChanged}/>;
    let { itemsInputs } = this.state;
    itemsInputs.push(newItemInput);
    this.setState({ itemsInputs });
  };

  onClickSubmit = () =>{
    console.log(this.state)
  }

  render() {
    console.log(this.state.show);
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
        <Modal.Header closeButton onHide={ e=> {
          this.props.onHide()
        }}>
          <Modal.Title id="contained-modal-title-vcenter">
            Place an new order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="info">
              <Form.Control name="name" placeholder="first name, last name" />
            </Form.Group>
            <Form.Group controlId="info">
              <Form.Control name="phone" placeholder="phone" />
            </Form.Group>
            <Form.Group controlId="info">
              <Form.Control name="address" placeholder="Address" />
            </Form.Group>
            <Form.Group controlId="info">
              <Form.Control name="suite" placeholder="Suite #" />
            </Form.Group>
            <Form.Group controlId="info">
              <Form.Label>Items</Form.Label>
            </Form.Group>
            {this.state.itemsInputs.map(i => i)}
            <Button onClick={this.addItem}>Add Item</Button>
          </Form>
        </Modal.Body>
        <Form.Group controlId="info">
          <Form.Label>Approxmate total price</Form.Label>
          <Form.Control name="suite" placeholder="Approxmate total price" />
        </Form.Group>
        <Modal.Footer>
        <Form.Group controlId="info">  
          <Button onClick = {this.onClickSubmit}>Submit</Button>
          </Form.Group>
        </Modal.Footer>
      </Modal>
    );
  }
}
