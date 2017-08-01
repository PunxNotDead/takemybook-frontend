import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { loadBooks } from '../actions/books';

const mapStateToProps = state => ({
	books: state.books.list,
	listLoading: state.books.listLoading
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadBooks }, dispatch);

// https://developers.google.com/identity/branding-guidelines


class Register extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-lg-8 col-lg-offset-2">
						<h2>Registration</h2>

						<div className="input-group">
							<span className="input-group-addon" id="addon-filter">Filter</span>
							<input type="text" className="form-control" placeholder="Some words for filtering..." aria-describedby="addon-filter" />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-12 col-lg-3 col-lg-offset-2">
						<div className="loginBtn--facebook">
							<span className="loginBtn__buttonText--facebook">Sign In with</span>
							<span className="loginBtn__icon--facebook"></span>
						</div>
					</div>
					<div className="col-xs-12 col-lg-2 text-center">
						or
					</div>
					<div className="col-xs-12 col-lg-3">
						<div className="loginBtn--google">
							<span className="loginBtn__icon--google"></span>
							<span className="loginBtn__buttonText--google">Sign In with Google</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Register.propTypes = {
};

Register.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
