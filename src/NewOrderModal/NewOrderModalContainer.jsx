import React from "react";
import { Form, FormControl, Button, Modal, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import LocationSearchInput from "./../common/component/LocationSearchInput";

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
          placeholder="enter an item/task you want to us to do"
        />
      </Form.Group>
    );
  }
}

class NewOrderModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: this.props.isAuthenticated,
      email: this.props.email,
      password: this.props.password,
      show: this.props.show,
      fullName: "",
      address: "",
      suite: "",
      phone: "",
      itemsInputs: [],
      itemsValues: {},
      estimatedTotalPrice: 0,
      latitude: null,
      longitude: null,
      totalPrice: null,
    };
  }
  showModal = (e) => {
    this.setState({
      show: true,
    });
  };

  static getDerivedStateFromProps(props, state) {
    if (state.isAuthenticated !== props.isAuthenticated) {
      return {
        isAuthenticated: props.isAuthenticated,
        email: props.email,
        password: props.password,
      };
    }
  }

  handleValidation = () => {
    if (this.state.fullName === "") {
      alert("Enter your full name");
      return false;
    }

    if (
      this.state.address === "" ||
      this.state.latitude === null ||
      this.state.longitude === null
    ) {
      alert("Enter your address");
      return false;
    }

    if (this.state.itemsValues.length <= 0) {
      alert("Enter an item");
    }

    if (this.state.totalPrice === 0) {
      alert("Please enter the estimated price for this order");
    }

    if (this.state.phone === "") {
      alert("Enter your phone number");
    }
    return true;
  };

  LocationSearchInputHandleSelect = (latlgn, address) => {
    console.log("YO", latlgn, address);
    this.setState({ address: address });
    this.setState({ longitude: latlgn.lng });
    this.setState({ latitude: latlgn.lat });
  };

  onChangeInput = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  itemTextChanged = (e) => {
    let { itemsValues } = this.state;
    itemsValues[e.target.id] = e.target.value;
  };

  addItem = (item) => {
    let name = `item-${Object.keys(this.state.itemsInputs).length}`;
    let newItemInput = <Item name={name} onChange={this.itemTextChanged} />;
    let { itemsInputs } = this.state;
    itemsInputs.push(newItemInput);
    this.setState({ itemsInputs });
  };

  onClickSubmit = () => {
    if (!this.handleValidation()) {
      return;
    }
    fetch("https://pigeon2.herokuapp.com/createOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        fullName: this.state.fullName,
        address: this.state.address,
        suite: this.state.suite,
        phone: this.state.phone,
        itemsValues: this.state.itemsValues,
        estimatedTotalPrice: this.state.estimatedTotalPrice,
        status: "ACTIVE",
      }),
    }).then((response) => {
      console.log(response);
      if (response.status == 200) {
        this.props.onHide();
      } else {
        alert("Unable to place order...");
      }
    });
    console.log(this.state);
  };

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
        <Modal.Header
          closeButton
          onHide={(e) => {
            this.props.onHide();
          }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Place an new order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="info">
              <Form.Control
                name="fullName"
                placeholder="Full name *"
                onChange={(e) => this.onChangeInput(e)}
              />
            </Form.Group>
            <Form.Group controlId="info">
              <Form.Control
                name="phone"
                placeholder="Enter phone *"
                onChange={(e) => this.onChangeInput(e)}
              />
            </Form.Group>
            <Form.Group controlId="info">
              <LocationSearchInput
                handleSelect={this.LocationSearchInputHandleSelect}
              />
            </Form.Group>
            <Form.Group controlId="info">
              <Form.Control
                name="suite"
                placeholder="Suite # (Optional)"
                onChange={(e) => this.onChangeInput(e)}
              />
            </Form.Group>
            <Form.Group controlId="info">
              <Form.Label>Items</Form.Label>
            </Form.Group>
            {this.state.itemsInputs.map((i) => i)}
            <Button onClick={this.addItem}>Add Item</Button>
          </Form>
        </Modal.Body>
        <Form.Group controlId="info">
          <Form.Label>Estimated total price</Form.Label>
          <Form.Control
            name="totalPrice"
            placeholder="Estimated total price for this order ($)*"
            onChange={(e) => this.onChangeInput(e)}
          />
        </Form.Group>
        <Modal.Footer>
          <Form.Group controlId="info">
            <Button onClick={this.onClickSubmit}>Submit</Button>
          </Form.Group>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
  email: state.authentication.email,
  password: state.authentication.password,
});

NewOrderModalContainer = connect(mapStateToProps)(NewOrderModalContainer);
export default NewOrderModalContainer;
