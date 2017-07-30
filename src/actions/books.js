export const BOOKS_FETCH_REQUESTED = 'BOOKS_FETCH_REQUESTED';
export const BOOKS_FETCH_FAILED = 'BOOKS_FETCH_FAILED';
export const BOOKS_FETCH_DONE = 'BOOKS_FETCH_DONE';

export const loadBooks = query => ({ type: BOOKS_FETCH_REQUESTED, query });
export const loadBooksFailed = error => ({ type: BOOKS_FETCH_FAILED, error });
export const loadBooksDone = books => ({ type: BOOKS_FETCH_DONE, books });
