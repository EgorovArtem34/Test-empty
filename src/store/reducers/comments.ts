import { ActionCommentsById, InitialCommentsType } from '../../types';
import { SET_COMMENTS_BY_ID } from '../constants';

const initialState: InitialCommentsType = {
  comments: {},
};
const comments = (state = initialState, { type, payload }: ActionCommentsById) => {
  switch (type) {
    case SET_COMMENTS_BY_ID:
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
