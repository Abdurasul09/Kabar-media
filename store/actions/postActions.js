import api from "../../helpers/consts";
import {GET_POSTS, GET_POSTS_LOADING} from "../types";

export const fetchPosts = (value) => {
    return async (dispatch) => {
        try {
            dispatch({type: GET_POSTS_LOADING});
            const res = await api.get(`api/v1/articles/?category=` + value);
            dispatch({type: GET_POSTS, payload: res.data});
        } catch (e) {
            console.log(e);
        }
    };
};

export const searchPosts = (value) => {
    return async (dispatch) => {
        try {
            const res = await api.get(`api/v1/articles/search/?search=` + value);
            dispatch({type: GET_POSTS, payload: res.data});
        } catch (e) {
            console.log(e);
        }
    };
};
