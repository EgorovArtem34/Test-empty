import { ActionCommentsById, initialCommentsType } from "../../types";
import { SET_COMMENTS_BY_ID } from "../constants";


const initialState = {
  comments: [],
}

const comments = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COMMENTS_BY_ID:
      return {
        ...state,
        comments: payload,
      }
    default:
      return state;
  }
};

export default comments;
