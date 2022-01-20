import { useEffect, useState } from "react";
import {
  GET_INTERESTING_IMAGE,
  GET_INTERESTING_IMAGE_LOADING,
  GET_INTERESTING_POSTS,
  GET_INTERESTING_POSTS_LOADING
} from "../types";

const initialState = {
  interestingPosts: [],

  interestingPost: {},
  loading: false,
  error: null,
};

export const interestingPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INTERESTING_POSTS_LOADING:
      return { ...state, loading: true };
    case GET_INTERESTING_POSTS:
      return {
        ...state,
        interestingPosts: action.payload,
        loading: false,
        error: null,
      };
    // case GET_INTERESTING_IMAGE_LOADING:
    //   return {...state,loading: true}
    // case GET_INTERESTING_IMAGE:
    //   return {
    //     ...state, interestingPost: action.payload,loading: false,
    //     error: null
    //   }

    default:
      return state;
  }
};
