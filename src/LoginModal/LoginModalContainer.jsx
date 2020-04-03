import React from "react";
import {
  Form,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";


class LoginModalContainer extends React.Component {
  state = {
    "email":"",
    "password":"",
  }

  onChangeText = (e)=>{
    console.log(e);
    this.setState({[e.target.name]:e.target.value});  
}

  onClickLogin = ()=>{
    //const email = localStorage.getItem("email");
    fetch("https://pigeon1.herokuapp.com/login", {
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
        alert("Unable to Login...")
      }
    });
    console.log(this.state);
  }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Form.Control name="email" placeholder="E-mail" onChange={ e=> {this.onChangeText(e)}}/>
            <Form.Control name="password" placeholder="Password" onChange={ e=> {this.onChangeText(e)}}/>
            <Button variant="primary" onClick={this.onClickLogin}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default LoginModalContainer;