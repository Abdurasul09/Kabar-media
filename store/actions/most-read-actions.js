import api, {MOST_READ_API} from "../../helpers/consts";
import {GET_MOST_READ_POST, GET_MOST_READ_POST_LOADING} from "../types";

export const fetchMostRead = (key, value) => {
    return async (dispatch) => {
        try {
            dispatch({type: GET_MOST_READ_POST_LOADING});

            if (key === "video" || key === 'image') {
                const res = await api.get(`api/v1/articles/viewed/` + value);
                dispatch({
                    type: GET_MOST_READ_POST,
                    payload: res.data.results,
                });
            } else if (key === "region") {
                const res = await api.get(`api/v1/articles/most-viewed/?region=` + value);
                dispatch({
                    type: GET_MOST_READ_POST,
                    payload: res.data.results,
                });
            } else {
                const res = await api.get(`api/v1/articles/most-viewed/`);
                dispatch({
                    type: GET_MOST_READ_POST,
                    payload: res.data.results,
                });
            }
        } catch (e) {
            console.log(e);
        }
    };
};
