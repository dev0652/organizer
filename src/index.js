import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
      toastOptions={{
        duration: 2000,
        style: {
          maxWidth: '100%',
          fontSize: '1.1rem',
          lineHeight: '2rem',
          padding: '15px 30px',
          // paddingLeft: '20px',
        },

        success: {
          style: {
            // background: 'Cornsilk',
            // background: '#f0fff0',
            background: '#f5fffa',
          },
        },
        error: {
          style: {
            background: 'LavenderBlush',
          },
        },
      }}
    />
  </React.StrictMode>
);
