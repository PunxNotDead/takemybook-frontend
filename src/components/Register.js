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

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-lg-8 col-lg-offset-2">
						<h2>Registration</h2>

						<form>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Your Name" />
							</div>

							<div className="form-group">
								<input type="email" className="form-control" placeholder="Your E-mail" />
							</div>

							<div className="form-group">
								<input type="password" className="form-control" placeholder="Password" />
							</div>

							<div className="form-group">
								<input type="password" className="form-control" placeholder="Repeat password" />
							</div>

							<button type="submit" className="btn btn-primary">Register</button>
						</form>
					</div>
				</div>

				<div className="row">
					<hr />

					<div className="col-xs-12 col-lg-3 col-lg-offset-2">
						<div className="loginBtn--facebook" >
							<span className="loginBtn__buttonText--facebook">Sign In with</span>
							<span className="loginBtn__icon--facebook"></span>
						</div>
					</div>
					<div className="col-xs-12 col-lg-2 text-center">
						or
					</div>
					<div className="col-xs-12 col-lg-3">
						<a className="loginBtn--google" href="/api/login/google">
							<span className="loginBtn__icon--google"></span>
							<span className="loginBtn__buttonText--google">Sign In with Google</span>
						</a>
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
