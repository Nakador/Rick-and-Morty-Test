import App from './app/app';
import React from 'react';
import ReactDOM from 'react-dom/client';

export type * from './app/services/api/types';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
