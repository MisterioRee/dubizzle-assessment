/**
 * Using redux for state management.
 * Reff:https://en.wikipedia.org/wiki/Redux_(JavaScript_library)
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Reducers
import rootReducer from "./RootReducers";

//Bootstrap on application start 
const initialState = {};

//The thunk middleware allows us to write functions that get dispatch and getState as arguments.
const middleware = [thunk];

//Creates a Redux store that holds the complete state tree of the app
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
