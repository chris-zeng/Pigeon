import { createstore, applyMiddleware } from "redux";
import thunk from "react-thunk";
import rootReudcer from './reducers';

const initiateState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
