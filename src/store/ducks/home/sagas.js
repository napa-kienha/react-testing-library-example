import { takeEvery, put, call } from "redux-saga/effects";
import homeTypes from "./types";
import { saveCountries } from "./actions";
import Request from "services/request";

const request = new Request();

function* fetchData() {
  try {
    const url = "https://restcountries.eu/rest/v2/all";
    const res = yield call(request.fetchData, url);
    if (res) {
      yield put(saveCountries(res));
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* homeSaga() {
  yield takeEvery(homeTypes.FETCH_ALL_COUNTRIES_DATA, fetchData);
}
