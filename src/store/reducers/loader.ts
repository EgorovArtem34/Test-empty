import { ActionLoader } from "../../types";
import { SET_LOADING_DATA, SET_LOADING_COMMENTS, SET_LOADING_USER_DATA } from "../constants";

export const initialStateLoader = {
  isLoadingData: false,
  isLoadingComments: false,
  isLoadingUserData: false,
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
      console.log("LOADING??")
      return {
        ...state,
        isLoadingUserData: payload,
      }
    default:
      return state;
  }
};

export default loader;
