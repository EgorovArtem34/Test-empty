import { ActionCommentsById, initialCommentsType } from "../../types";
import { SET_COMMENTS_BY_ID } from "../constants";

const initialState: initialCommentsType = {
  comments: {},
}
const comments = (state = initialState, { type, payload }: ActionCommentsById) => {
  switch (type) {
    case SET_COMMENTS_BY_ID:
      console.log(payload);
      return {
        ...state,
        comments: {
          ...state.comments,
          [payload.payload]: [...payload.comments],
        },
      };
    default:
      return state;
  }
};

export default comments;
