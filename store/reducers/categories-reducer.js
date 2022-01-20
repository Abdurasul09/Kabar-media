import { GET_CATEGORIES } from "../types";

const initialState = {
    categories: [],
    adversiting: {},
    loading: false,
    error: null,
};

export const categoriesReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_CATEGORIES:
            return{...state,categories:action.payload}

            default:
                return state
    }
}