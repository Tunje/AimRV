// src/main.js
// No imports - using global React and ReactDOM from CDN

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

// Use global React and ReactDOM
window.ReactDOM.createRoot(root).render(
  window.React.createElement(window.React.StrictMode, null, 
    window.React.createElement(App)
  )
);
