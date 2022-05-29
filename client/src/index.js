import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/state';

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App store={store}/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );


