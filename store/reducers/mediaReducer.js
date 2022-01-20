import {GET_MEDIA} from "../types";

const initialState = {
    media: [],
    mostPost: {},
    loading: false,
    error: null,
};

export const mediaReducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_MEDIA:
            return{...state, media:action.payload}
        default :
            return state
    }

}