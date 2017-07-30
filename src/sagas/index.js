import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga'

import { BOOKS_FETCH_REQUESTED } from '../actions/books';
import { loadBooksFailed, loadBooksDone } from '../actions/books';
import Api from '../services/api';

function* fetchBooksList(action) {
	try {
		// Debounce requests, waiting until end of typing
		yield call(delay, 500);

		const books = yield call(Api.getBooksList, action.query);
		yield put(loadBooksDone(books));
	} catch (e) {
		yield put(loadBooksFailed(e.message));
	}
}

function* booksSaga() {
  yield takeLatest(BOOKS_FETCH_REQUESTED, fetchBooksList);
}

export default booksSaga;
