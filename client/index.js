import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';

import App from './App';

const store = createStore(
  () => {},
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);
