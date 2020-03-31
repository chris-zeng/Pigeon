
import React from 'react'
import NavBarComponent from './NavBarComponent'
import LoginModal from '../LoginModal'

export default class NavBarContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      authenticated: false
    }
  }

  loginClicked = ()=>{
    return(<LoginModal/>);
  }

  render() {
    return (
      <NavBarComponent loginClicked={this.loginClicked}/>
    );
  }
}
