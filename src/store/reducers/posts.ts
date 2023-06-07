import { SET_POSTS } from "../constants";

const initialState = {
  posts: [],
}

const posts = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS:
      return {
        ...state,
        posts: payload,
      }
    default:
      return state;
  }
};

export default posts;
