import React from "react";
import {
  Form,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";
import {connect} from 'react-redux';
import {login} from '../actions/loginAction';

class LoginModalContainer extends React.Component {
  state = {
    "email":"",
    "password":"",
  }

  onChangeText = (e)=>{
    this.setState({[e.target.name]:e.target.value});  
}

  onClickLogin = async ()=>{
    const validate = (email) => {
      const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  
      return expression.test(String(email).toLowerCase())
    }
    if(!validate(this.state.email)){
      alert("Please enter a valid email format");
      return;
    } 
    const isAuthenticated = await this.props.login(this.state.email, this.state.password);
    if(isAuthenticated){
      this.props.onHide();
    }
  }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Form.Control type="email" name="email" placeholder="E-mail" onChange={ e=> {this.onChangeText(e)}}/>
            <Form.Control type="password" name="password" placeholder="Password" onChange={ e=> {this.onChangeText(e)}}/>
            <Button variant="primary" onClick={this.onClickLogin}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default connect(null, {login})(LoginModalContainer);