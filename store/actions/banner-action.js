import {GET_BANNER, GET_BANNER_LOADING} from "../types";
import api from "../../helpers/consts";

export const bannerAction = () => {
    return async (dispatch) => {
        try {
            dispatch({type: GET_BANNER_LOADING})
            const res = await api.get('api/v1/articles/?is_main=True')
            dispatch({type: GET_BANNER, payload: res.data})
        } catch (e) {
            console.log(e)
        }
    }
}