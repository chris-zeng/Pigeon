import React from "react";
import NavBarComponent from "./NavBarComponent";
import LoginModal from "../LoginModal";
import { connect } from "react-redux";
import {setGeoLocation} from './../actions/setGeoLocationAction'
import {logout} from './../actions/logoutAction'
class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: this.props.isAuthenticated
    };
  }

  handleLocationSearchInputSelect = (latlgn, address) => {
    this.props.setGeoLocation(latlgn.lat, latlgn.lng);
  }

  static getDerivedStateFromProps(props, state) {
    if (state.isAuthenticated !== props.isAuthenticated) {
      return { isAuthenticated: props.isAuthenticated };
    }
  }

  loginClicked = () => {
    return <LoginModal />;
  };

  onClickLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <NavBarComponent
        loginClicked={this.loginClicked}
        onClickLogout={this.onClickLogout}
        isAuthenticated={this.state.isAuthenticated}
        handleLocationSearchInputSelect = {this.handleLocationSearchInputSelect}
        props = {this.props.logout}
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
  email: state.authentication.email,
  password: state.authentication.password,
});

NavBarContainer = connect(mapStateToProps, {setGeoLocation, logout})(NavBarContainer);

export default NavBarContainer;
