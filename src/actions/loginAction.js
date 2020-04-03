import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "./types";

export const login = (email, password) => dispatch => {
    fetch("https://pigeon1.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => {
      console.log(response);
      if (response.status == 200) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: email,
        });
      } else {
        alert("Unable to Login...");
        dispatch({
          type: LOGIN_FAILURE,
        });
      }
    });
    console.log(this.state);
}
