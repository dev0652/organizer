import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';

import { Toaster } from 'react-hot-toast';
import { containerStyle, toastOptions } from 'services/toastOptions';

import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>

    <Toaster containerStyle={containerStyle} toastOptions={toastOptions} />
  </React.StrictMode>
);
