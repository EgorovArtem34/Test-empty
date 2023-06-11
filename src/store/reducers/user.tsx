import { ActionUserType, InitialStateUserType } from '../../types';
import { SET_USER_DATA, SET_USER_POSTS } from '../constants';

const initialState: InitialStateUserType = {
  userData: [],
  userPosts: [],
};

const posts = (state = initialState, { type, payload }: ActionUserType) => {
  switch (type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: payload,
      };
    case SET_USER_POSTS:
      return {
        ...state,
        userPosts: payload,
      };
    default:
      return state;
  }
};

export default posts;
