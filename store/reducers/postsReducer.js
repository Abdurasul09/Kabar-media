import { GET_POSTS, GET_POSTS_LOADING } from "../types";

const initialState = {
  posts: [],
  post: {},
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_LOADING:
      return { ...state, loading: true };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
