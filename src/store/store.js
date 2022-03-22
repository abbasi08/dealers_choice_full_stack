import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import currItemsReducer from "./currItems";

const reducer = combineReducers({
  currItems: currItemsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;
