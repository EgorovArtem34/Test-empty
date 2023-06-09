import { SET_USER } from "../constants";

const initialState = {
  userData: [],
}

const posts = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        userData: payload,
      }
    default:
      return state;
  }
};

export default posts;
