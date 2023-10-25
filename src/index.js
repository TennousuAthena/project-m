import 'reset-css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router';
import InitSentry from './utli/sentry';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
InitSentry();
root.render(
  <React.StrictMode>
    <main>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </main>
  </React.StrictMode>
);

reportWebVitals(console.log);
