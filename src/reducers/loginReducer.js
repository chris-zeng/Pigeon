import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  email: null,
  isAuthenticated: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("SUCCESS LOGIN");
      return {
        ...state,
        email: action.payload,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
