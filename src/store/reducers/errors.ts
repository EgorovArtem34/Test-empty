import { ActionErrorsType } from "../../types";
import { SET_COMMENTS_ERROR, SET_POSTS_ERROR, SET_USER_DATA_ERROR, SET_USER_POSTS_ERROR } from "../constants";

export const initialStateErrors = {
  postsError: '',
  commentsError: '',
  userPostsError: '',
  userDataError: '',
};

const errors = (state = initialStateErrors, { type, payload }: ActionErrorsType) => {
  switch (type) {
    case SET_POSTS_ERROR:
      return {
        ...state,
        postsError: payload,
      }
    case SET_COMMENTS_ERROR:
      return {
        ...state,
        commentsError: payload,
      }
    case SET_USER_POSTS_ERROR:
      return {
        ...state,
        userPostsError: payload,
      }
    case SET_USER_DATA_ERROR:
      return {
        ...state,
        userDataError: payload,
      }
    default:
      return state;
  }
};

export default errors;
