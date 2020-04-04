import { LOGOUT_REQUEST } from "./types";

export const logout = () => async dispatch => {
    return dispatch({type:LOGOUT_REQUEST})
}
