import {
  SET_GEOLOCATION_FAILURE,
  SET_GEOLOCATION_REQUEST,
  SET_GEOLOCATION_SUCCESS,
} from "./types";

export const setGeoLocation = (latitude, longitude) => async (dispatch) => {
  if (latitude !== null && longitude !== null) {
    dispatch({
      type: SET_GEOLOCATION_SUCCESS,
      longitude: longitude,
      latitude: latitude,
    });
  }
};
