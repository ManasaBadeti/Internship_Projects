import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import {Suspense, lazy, StrictMode} from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<div />}>
    <HashRouter>
      {/* <StrictMode> */}
        <App />
      {/* </StrictMode> */}
    </HashRouter>
  </Suspense>
);