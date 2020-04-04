import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from "../actions/types";

const INITIAL_STATE = {
  email: null,
  isAuthenticated: false,
};

const authenticationReducer = (state = INITIAL_STATE, action) => {
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
    case SIGNUP_SUCCESS:
      console.log("SUCCESS SIGNUP");
      return {
        ...state,
        email: action.payload,
        isAuthenticated: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
