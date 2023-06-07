import { initialStateLoader } from "../../types";
import { SET_LOADING_DATA } from "../constants";


const loader = (state = initialStateLoader, { type, payload }) => {
  switch (type) {
    case SET_LOADING_DATA:
      return {
        ...state,
        isLoadingData: payload,
      }
    default:
      return state;
  }
};

export default loader;
