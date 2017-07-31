import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import Main from './Main';
import Register from './Register';

import reducers from '../reducers';
import saga from '../sagas';
import initialStore from '../store/initialStore';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducers,
	initialStore,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);

const Root = () => (
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={Main} />
				<Route path="/registration" component={Register} />
			</div>
		</Router>
	</Provider>
);

export default Root;
