import { LOGIN_FAILURE, LOGIN_SUCCESS, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./types";

export const signup = (email, password, username) => async dispatch => {
    const status = await fetch("https://pigeon2.herokuapp.com/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
      }),
    }).then((response) => {
      console.log(response);
      if (response.status == 200) {
        dispatch({
          type: SIGNUP_SUCCESS,
          email: email,
          password: password,
        });
        return true;
      } else {
        alert("Unable to Signup...");
        dispatch({
          type: SIGNUP_FAILURE,
        });
        return false;
      }
    });
    return status;
}