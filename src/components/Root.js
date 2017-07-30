import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import Main from './Main';
import reducers from '../reducers';
import saga from '../sagas';
import initialStore from '../store/initialStore';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducers,
	initialStore,
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(saga);

const Root = () => (
	<Provider store={store}>
		<Router>
			<Route exact path="/" component={Main} />
		</Router>
	</Provider>
);

export default Root;
