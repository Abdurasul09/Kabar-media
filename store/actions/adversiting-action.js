import axios from "axios";
import {GET_ADVERSITING, GET_ADVERSITING_LOADING} from "../types";
import api from "../../helpers/consts";

export const adversitingAction = () => {
    return async (dispatch) => {
        try {
            dispatch({type: GET_ADVERSITING_LOADING})
            const res = await api.get("api/v1/commercial/")
            dispatch({type: GET_ADVERSITING, payload: res.data})
        } catch (e) {
            console.log(e)
        }
    }
}