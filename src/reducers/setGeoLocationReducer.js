import {
    SET_GEOLOCATION_FAILURE,
    SET_GEOLOCATION_SUCCESS,
    SET_GEOLOCATION_REQUEST,
  } from "../actions/types";
  
  const INITIAL_STATE = {
    latitude: null,
    longitude: null,
  };
  
  const setGeoLocationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_GEOLOCATION_SUCCESS:
        return {
          ...state,
          latitude: action.latitude,
          longitude: action.longitude,
        };
      default:
        return state;
    }
  };
  
  export default setGeoLocationReducer;
  