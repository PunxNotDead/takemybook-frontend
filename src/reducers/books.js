import { BOOKS_FETCH_REQUESTED, BOOKS_FETCH_DONE, BOOKS_FETCH_FAILED } from '../actions/books';

const books = (state = {}, action) => {
	switch (action.type) {
		case BOOKS_FETCH_REQUESTED: {
			return Object.assign({}, state, {
				query: action.query,
				listLoading: true
			});
		}

		case BOOKS_FETCH_DONE: {
			return Object.assign({}, state, {
				list: action.books,
				listLoading: false
			});
		}

		case BOOKS_FETCH_FAILED: {
			return Object.assign({}, state, {
				listLoading: false
			});
		}

		default: {
			return state;
		}
	}
};

export default books;
