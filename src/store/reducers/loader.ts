import { ActionLoader } from "../../types";
import { SET_LOADING_DATA, SET_LOADING_COMMENTS, SET_LOADING_USER_DATA, SET_LOADING_USER_POSTS } from "../constants";

export const initialStateLoader = {
  isLoadingData: false,
  isLoadingComments: false,
  isLoadingUserData: false,
  isLoadingUserPosts: false,
}

const loader = (state = initialStateLoader, { type, payload }: ActionLoader) => {
  switch (type) {
    case SET_LOADING_DATA:
      return {
        ...state,
        isLoadingData: payload,
      }
    case SET_LOADING_COMMENTS:
      return {
        ...state,
        isLoadingComments: payload,
      }
    case SET_LOADING_USER_DATA:
      return {
        ...state,
        isLoadingUserData: payload,
      }
    case SET_LOADING_USER_POSTS:
      return {
        ...state,
        isLoadingUserPosts: payload,
      }
    default:
      return state;
  }
};

export default loader;
