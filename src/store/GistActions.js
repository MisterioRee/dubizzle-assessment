
//Gist API references
import { getPublicGists, getGistForUser } from "../services/gistService";

//Action types
export const LOAD_GIST_LIST_STARTED = "LOAD_GIST_LIST_STARTED";
export const LOAD_GIST_LIST_SUCCESS = "LOAD_GIST_LIST_SUCCESS";
export const LOAD_GIST_LIST_ERROR = "LOAD_GIST_LIST_ERROR";

//Action get All Gists
export const loadAllGist = () => (dispatch) => {
  dispatch({
    type: LOAD_GIST_LIST_STARTED,
  });
  getPublicGists()
    .then((res) => {
      dispatch({
        type: LOAD_GIST_LIST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOAD_GIST_LIST_ERROR,
        payload: error?.message,
      });
    });
};

//Action seaction by username
export const filterGistByUsername = (username) => (dispatch) => {
  dispatch({
    type: LOAD_GIST_LIST_STARTED,
  });
  getGistForUser(username)
    .then((res) => {
      dispatch({
        type: LOAD_GIST_LIST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOAD_GIST_LIST_ERROR,
        payload: error?.message,
      });
    });
};
