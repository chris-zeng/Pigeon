import React from "react";
import NavBarComponent from "./NavBarComponent";
import LoginModal from "../LoginModal";
import { connect } from "react-redux";
import {setGeoLocation} from './../actions/setGeoLocationAction'
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
    localStorage.clear();
  };

  render() {
    return (
      <NavBarComponent
        loginClicked={this.loginClicked}
        onClickLogout={this.onClickLogout}
        isAuthenticated={this.state.isAuthenticated}
        handleLocationSearchInputSelect = {this.handleLocationSearchInputSelect}
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
  email: state.authentication.email,
  password: state.authentication.password,
});

NavBarContainer = connect(mapStateToProps, {setGeoLocation})(NavBarContainer);

export default NavBarContainer;
