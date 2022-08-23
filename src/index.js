import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import PrimaryTheme from './themes/PrimaryTheme';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={PrimaryTheme}>
      <AppContextProvider>
      <App />
      </AppContextProvider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
