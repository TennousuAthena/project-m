import 'reset-css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import '@vant/touch-emulator';

import Router from './router';
import InitSentry from './util/sentry';
import localStorage from './settings/localStorage';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
localStorage.init();
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

// reportWebVitals(console.log);
