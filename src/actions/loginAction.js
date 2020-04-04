import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "./types";

export const login = (email, password) => async dispatch => {
    const status = await fetch("https://pigeon2.herokuapp.com/login", {
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
          email: email,
          password: password
        });
        return true;
      } else {
        alert("Unable to Login...");
        dispatch({
          type: LOGIN_FAILURE,
        });
        return false;
      }
    });
    return status;
}
