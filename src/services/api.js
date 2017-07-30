import $ from 'jquery';

function getPlacesList(query) {
	return new Promise((resolve, reject) => {
		$.getJSON('/api/search/list', { query })
			.done(resolve)
			.fail(reject);
	});
}

export default {
	getPlacesList
};
