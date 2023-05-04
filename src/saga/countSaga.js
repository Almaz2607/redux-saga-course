import {
  ASYNC_DECREMENT,
  ASYNC_INCREMENT,
  decrementAC,
  incrementAC,
} from "../store/countReducer";
import { put, takeEvery } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementAC());
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decrementAC());
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_DECREMENT, decrementWorker);
}
