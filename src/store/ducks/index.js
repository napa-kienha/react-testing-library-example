import { combineReducers } from "redux";
import homeReducer from "./home/reducers";

export const appReducer = combineReducers({
  home: homeReducer,
});
