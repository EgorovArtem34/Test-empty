import { ActionType, PostsType } from '../../types';
import { SET_POSTS } from '../constants';

const initialState: PostsType = {
  posts: [],
};

const posts = (state = initialState, { type, payload }: ActionType) => {
  switch (type) {
    case SET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    default:
      return state;
  }
};

export default posts;
