/**
This file renders the React app and attaches it to the DOM.
@author @moSaeed15
@global index
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

/**

Renders the React app and attaches it to the DOM.
@function
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="749417144932-40bn9j748fbhp5tciuuhd5ehhr8e5gfd.apps.googleusercontent.com">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
