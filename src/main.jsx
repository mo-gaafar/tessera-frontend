/**
This file renders the React app and attaches it to the DOM.
@author @moSaeed15
@global index
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import { BrowserRouter } from 'react-router-dom';

/**

Renders the React app and attaches it to the DOM.
@function
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
