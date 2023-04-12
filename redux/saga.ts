import { call, takeEvery, put } from "redux-saga/effects";
import { fetchWeather } from "../api/weatherApi";
import weatherSlice from "./weatherSlice";
import { sagaActions } from "./sagaActions";
import { AxiosError } from "axios";

const { fetchData, setError } = weatherSlice.actions;

export function* fetchDataSaga() {
  try {
    const { data } = yield call(fetchWeather);
    yield put(fetchData(data.list));
  } catch (e) {
    if (e instanceof AxiosError) {
      yield put(setError(e.message));
    }
  }
}

export function* watchDataSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}

export default function* rootSaga() {
  yield watchDataSaga();
}
