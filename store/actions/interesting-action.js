import api from "../../helpers/consts";
import {
    GET_INTERESTING_IMAGE,
    GET_INTERESTING_IMAGE_LOADING,
    GET_INTERESTING_POSTS,
    GET_INTERESTING_POSTS_LOADING
} from "../types";

export const fetchInterestingPosts = (key, value) => {
    return async (dispatch) => {
        try {
            dispatch({type: GET_INTERESTING_POSTS_LOADING});
            if (key === "video" || key === 'image') {
                const res = await api.get(`api/v1/articles/is_interesting/` + key || null);
                dispatch({type: GET_INTERESTING_POSTS, payload: res.data.results});
            } else if (key === "region") {
                const res = await api.get("api/v1/articles/interesting?region=" + value || null)
                dispatch({type: GET_INTERESTING_POSTS, payload: res.data.results})
            } else {
                const res = await api.get("api/v1/articles/interesting/")
                dispatch({type: GET_INTERESTING_POSTS, payload: res.data.results})
            }

        } catch (e) {
            console.log(e);
        }
    };
};

