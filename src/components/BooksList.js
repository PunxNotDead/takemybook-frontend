import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadBooks } from '../actions/books';
import Book from './Book';

const mapStateToProps = state => ({
	books: state.books.list,
	listLoading: state.books.listLoading
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadBooks }, dispatch);


class BooksList extends Component {
	constructor(props) {
		super(props);

		this.queryChanged = this.queryChanged.bind(this);
	}

	componentDidMount() {
		this.props.loadBooks(this.props.query);
	}

	queryChanged(event) {
		this.props.loadBooks(event.target.value);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-lg-8 col-lg-offset-2">
						<h2>Books list</h2>

						<div className="input-group">
							<span className="input-group-addon" id="addon-filter">Filter</span>
							<input type="text" className="form-control" placeholder="Some words for filtering..." onChange={this.queryChanged} aria-describedby="addon-filter" />
						</div>
					</div>
				</div>

				{this.props.listLoading
					? (
						<div className="col-xs-12 col-lg-8 col-lg-offset-2">
							<h3>Loading items...</h3>
						</div>
					)
					: this.props.books.length > 0
						? this.books.places.map((item, index) => (
							<Book item={item} key={index} />
						))
						: (
							<div className="col-xs-12 col-lg-8 col-lg-offset-2">
								<h2>No results... :(</h2>
							</div>
						)
				}
			</div>
		);
	}
}

BooksList.propTypes = {
	query: PropTypes.string,
	books: PropTypes.array
};

BooksList.defaultProps = {
	query: '',
	books: []
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
