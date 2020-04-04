import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./types";

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
          type: LOGIN_SUCCESS,
          payload: email,
        });
        return true;
      } else {
        alert("Unable to Signup...");
        dispatch({
          type: LOGIN_FAILURE,
        });
        return false;
      }
    });
    return status;
}