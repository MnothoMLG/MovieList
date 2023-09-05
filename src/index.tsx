import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { store } from './store/root.store';
import { ToastContainer } from 'react-toastify';
import { LoadingOverlay } from 'src/components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
      <LoadingOverlay />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
