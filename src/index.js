import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import store from './components/redux/state';
import './index.css';

import App from './App';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App dispatch={store.dispatch.bind(store)} state={state} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
