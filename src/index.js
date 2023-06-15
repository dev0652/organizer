import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { Toaster } from 'react-hot-toast';
import { containerStyle, toastOptions } from 'services/toastOptions';

import App from 'components/App';
import './index.css';

// ################################################

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

    <Toaster containerStyle={containerStyle} toastOptions={toastOptions} />
  </React.StrictMode>
);
