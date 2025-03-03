// src/main.js
// Import React from CDN
import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';

// Import styles directly with relative path
import './styles/index.css';

// Import App component
import App from './App.jsx';

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

// Use React and ReactDOM
ReactDOM.createRoot(root).render(
  React.createElement(React.StrictMode, null, 
    React.createElement(App)
  )
);
