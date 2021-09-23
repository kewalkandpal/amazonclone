import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Stateprovider from './Stateprovider';
import { initialState, reducer } from './Reducer';


ReactDOM.render(
  <React.StrictMode>
    <Stateprovider initialState={initialState} reducer={reducer}>
      <App />
    </Stateprovider>
  </React.StrictMode>,
  document.getElementById('root')
);
