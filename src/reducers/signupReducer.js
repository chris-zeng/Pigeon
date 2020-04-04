import { SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  email: null,
  isAuthenticated: false,
};

const signupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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

export default signupReducer;