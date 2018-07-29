import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import rootReducer from './reducers/index';
import watchFetchBooks from './sagas/books.saga';

/* global window document */
/* eslint-disable no-underscore-dangle */
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(watchFetchBooks);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
