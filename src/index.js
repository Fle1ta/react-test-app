import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './redux/reducer';
import { watchFetchData } from './redux/sagas';

import App from './components/app/';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchData);

ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
	document.getElementById('root')
);

