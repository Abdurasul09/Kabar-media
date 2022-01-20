import {GET_ADVERSITING, GET_ADVERSITING_LOADING} from "../types";

const initialState = {
    adversitings: [],
    adversiting: {},
    loading: false,
    error: null,
};

export const adversitingReducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_ADVERSITING_LOADING:
            return{...state,loading: true}
        case GET_ADVERSITING:
            return {...state,adversitings: action.payload, loading: false,
                error: null,}
    default:
        return state
    };

}
