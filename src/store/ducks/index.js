import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import homeReducer from "./home/reducers";
import homeSaga from "./home/sagas";

export const appReducer = combineReducers({
  home: homeReducer,
});

export function* rootSaga() {
  yield all([fork(homeSaga)]);
}
