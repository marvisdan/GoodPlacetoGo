import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  constant,
  requestBooks,
  requestBooksSuccess,
  requestBooksError,
} from '../actions/index';

const url = 'https://api.glose.com/v1/booklists/free-books';
function* fetchBooksAsync() {
  try {
    yield put(requestBooks());
    const data = yield call(() => (
      axios.get(url)
        .then(res => res.data.modules[1].books)
    ));
    yield put(requestBooksSuccess(data));
  } catch (error) {
    yield put(requestBooksError());
  }
}

export default function* watchFetchBooks() {
  yield takeEvery(constant.FETCHED_BOOKS, fetchBooksAsync);
}
