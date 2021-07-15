//Import Actions
import {
  LOAD_GIST_LIST_STARTED,
  LOAD_GIST_LIST_SUCCESS,
  LOAD_GIST_LIST_ERROR,
} from "./GistActions";

//Init state of the Data
const initialState = {
  isLoading: false,
  gistList: [],
};

//Response to Actions
function gistReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_GIST_LIST_STARTED:
      return { ...state, isLoading: true };
    case LOAD_GIST_LIST_SUCCESS:
      return { ...state, gistList: payload, isLoading: false };
    case LOAD_GIST_LIST_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

export default gistReducer;
