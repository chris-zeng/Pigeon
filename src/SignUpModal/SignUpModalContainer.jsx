import React from "react";
import {
    Form,
    FormControl,
    Button,
    Modal,
  } from "react-bootstrap";
export default class SignInModalContainer extends React.Component {
  state = {
      email: "",
      password: "",
      confirmPassword: "",
  }

  onChangeText = (e)=>{
      console.log(e);
      this.setState({[e.target.name]:e.target.value});
  }

  onClickSubmit = () => {
    if (this.state.password !== this.state.confirmPassword || this.state.password.length < 6) {
      alert("both password need to match, and must be greater than 6 characters long");
      return;
    }
    //const email = localStorage.getItem("email");
    fetch("https://pigeon1.herokuapp.com/adduser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    }).then(response=>{
      console.log(response)
      if(response.status == 200){
        this.props.onHide();
      }
      else{
        alert("Unable to sign up...")
      }
    });
    console.log(this.state);
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Form.Control name="email" placeholder="E-mail" onChange={ e=> {this.onChangeText(e)}}/>
          <Form.Control name="password" placeholder="Password" onChange={ e=> {this.onChangeText(e)}}/>
          <Form.Control name="confirmPassword" placeholder="Confirm Password" onChange={ e=> {this.onChangeText(e)}}/>
          <Button variant="primary" onClick={this.onClickSubmit}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
