import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import any global styles here

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

