
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router' // react-router v4


// import App from './App';
import rootReducer from './actions/reducers/index';
import 'semantic-ui-css/semantic.min.css';
import Layout from './Layout';
import SinglePlace from './pages/single-place';
import Dashboard from './pages/dashboard';

const history = createBrowserHistory();

/* global window document */
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	connectRouter(history)(rootReducer),
	composeEnhancers(
		applyMiddleware(
			routerMiddleware(history), // for dispatching history actions
			thunk,
		),
	),
);

ReactDOM.render(
	<Provider store={store}>
		<Layout>
			<ConnectedRouter history={history}>
				<Switch>
					<Route path="/places/:id" component={SinglePlace} />
					<Route path="/places" component={Dashboard} />
					<Route exact path="/" component={Dashboard} />
				</Switch>
			</ConnectedRouter>
		</Layout>
	</Provider>,
	document.getElementById('root'),
);
