import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import Workspaces from './components/pages/workspaces';
import rootReducer from './rootReducer';
import './index.css';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware()
  )
);

ReactDOM.render(
  <Provider store={store}>
      <Workspaces />
  </Provider>,
  document.getElementById('root')
);
