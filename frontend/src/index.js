import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import komponen App
import './index.css'

// Temukan elemen root di index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render komponen App ke dalam elemen root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);