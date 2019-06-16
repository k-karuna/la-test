import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import createStore from '@/createStore';
import Styles from '@/Styles';
import Routes from '@/Routes';

const store = createStore();

render(
  <Provider store={store}>
    <Styles />
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
