import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from 'redux/store';

import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';

import App from 'components/App';
import Toast from 'components/Toast';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </ThemeProvider>

      <Toast />
    </Provider>
  </React.StrictMode>
);
