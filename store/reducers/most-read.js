import { GET_MOST_READ_POST, GET_MOST_READ_POST_LOADING } from "../types";

const initialState = {
  mostPosts: [],
  mostPost: {},
  loading: false,
  error: null,
};

export const mostRead = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOST_READ_POST_LOADING:
      return { ...state, loading: true };
    case GET_MOST_READ_POST:
      return {
        ...state,
        mostPosts: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
