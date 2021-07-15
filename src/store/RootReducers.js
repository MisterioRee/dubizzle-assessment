import { combineReducers } from "redux";
//Reduceres
import Gist from "./GistReducer";

//Combining multiple reducers as the app grows many reducers takes place
export default combineReducers({
  Gist,
});
