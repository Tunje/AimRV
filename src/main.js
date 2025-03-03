// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

// Handle GitHub Pages redirect for SPA
// This script checks if we've been redirected to /?/path
(function() {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect);
  }
})();

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  React.createElement(React.StrictMode, null, 
    React.createElement(App)
  )
);
