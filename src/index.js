import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { theme } from 'styling/theme';

import App from 'components/App';
import Toast from 'components/Toast';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>

      <Toast />
    </Provider>
  </React.StrictMode>
);
