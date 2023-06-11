import { UserDataType, UserPostType } from '../../types';
import {
  FETCH_POSTS,
  SET_POSTS,
  SET_LOADING_DATA,
  FETCH_COMMENTS_BY_ID,
  SET_COMMENTS_BY_ID,
  FETCH_USER_DATA,
  SET_USER_DATA,
  SET_LOADING_USER_DATA,
  SET_LOADING_USER_POSTS,
  SET_USER_POSTS,
} from '../constants';

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const setPosts = (payload: any) => ({
  type: SET_POSTS,
  payload,
});

export const setLoadingData = (payload: any) => ({
  type: SET_LOADING_DATA,
  payload,
});

export const fetchCommentsById = (payload: any) => ({
  type: FETCH_COMMENTS_BY_ID,
  payload,
});

export const setCommentsById = (payload: any) => ({
  type: SET_COMMENTS_BY_ID,
  payload,
});

export const fetchUserData = (payload: any) => ({
  type: FETCH_USER_DATA,
  payload,
});

export const setLoadingUserData = (payload: any) => ({
  type: SET_LOADING_USER_DATA,
  payload,
});

export const setLoadingUserPosts = (payload: any) => ({
  type: SET_LOADING_USER_POSTS,
  payload,
});

export const setUserData = (payload: any) => ({
  type: SET_USER_DATA,
  payload,
});

export const setUserPosts = (payload: any) => ({
  type: SET_USER_POSTS,
  payload,
});
