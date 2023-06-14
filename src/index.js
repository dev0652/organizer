import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { Toaster } from 'react-hot-toast';
import { containerStyle, toastOptions } from 'data/toastOptions';

import App from 'components/App';
import './index.css';

// ################################################

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>

    <Toaster containerStyle={containerStyle} toastOptions={toastOptions} />
  </React.StrictMode>
);
