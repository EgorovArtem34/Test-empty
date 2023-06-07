import { FETCH_POSTS, SET_POSTS, SET_LOADING_DATA } from "../constants";

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const setPosts = (payload) => ({
  type: SET_POSTS,
  payload,
});

export const setLoadingData = (payload) => ({
  type: SET_LOADING_DATA,
  payload,
});
