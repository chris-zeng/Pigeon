
import React from 'react'
import NavBarComponent from './NavBarComponent'
import LoginModal from '../LoginModal'
import {connect} from 'react-redux'; 

class NavBarContainer extends React.Component {
  constructor(props){
    super(props);
    console.log("PPROPS HERE", this.props);
    
    this.state = {
      isAuthenticated: this.props.isAuthenticated
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("COMPONENT DID UPDATE");
}

  loginClicked = ()=>{
    return(<LoginModal/>);
  }

  onClickLogout = () => {
    localStorage.clear();
  }

  render() {
    return (
      <NavBarComponent loginClicked={this.loginClicked} onClickLogout={this.onClickLogout} isAuthenticated={this.props.isAuthenticated}/>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.login.isAuthenticated,
  email: state.login.email
})

NavBarContainer = connect(mapStateToProps)(NavBarContainer);

export default NavBarContainer;