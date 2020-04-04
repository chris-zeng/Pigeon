import React from "react";
import NavBarComponent from "./NavBarComponent";
import LoginModal from "../LoginModal";
import { connect } from "react-redux";

class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log("PPROPS HERE", this.props);

    this.state = {
      isAuthenticated: this.props.isAuthenticated
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("COMPONENT DID UPDATE", props, state);
    if (state.isAuthenticated !== props.isAuthenticated) {
      return { isAuthenticated: props.isAuthenticated };
    }
  }

  loginClicked = () => {
    return <LoginModal />;
  };

  onClickLogout = () => {
    localStorage.clear();
  };

  render() {
    console.log("RENDER", this.state.isAuthenticated);
    return (
      <NavBarComponent
        loginClicked={this.loginClicked}
        onClickLogout={this.onClickLogout}
        isAuthenticated={this.state.isAuthenticated}
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
  email: state.authentication.email,
  password: state.authentication.password,
});

NavBarContainer = connect(mapStateToProps)(NavBarContainer);

export default NavBarContainer;
