import { FETCH_POSTS, SET_POSTS, SET_LOADING_DATA, FETCH_COMMENTS_BY_ID, SET_COMMENTS_BY_ID } from "../constants";

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

export const fetchCommentsById = (payload) => ({
  type: FETCH_COMMENTS_BY_ID,
  payload,
});

export const setCommentsById = (payload) => ({
  type: SET_COMMENTS_BY_ID,
  payload,
})
