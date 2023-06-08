import { ActionLoader } from "../../types";
import { SET_LOADING_DATA, SET_LOADING_COMMENTS } from "../constants";

export const initialStateLoader = {
  isLoadingData: false,
  isLoadingComments: false,
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
    default:
      return state;
  }
};

export default loader;
