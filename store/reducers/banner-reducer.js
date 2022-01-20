import {GET_BANNER, GET_BANNER_LOADING} from "../types";

const initialState = {
    banners: [],
    banner: {},
    loading: false,
    error: null,
};

export const bannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BANNER_LOADING:
            return { ...state, loading: true };
        case GET_BANNER:
            return {
                ...state,
                banners: action.payload,
                loading: false,
                error: null,
            };

        default:
            return state;
    }
};