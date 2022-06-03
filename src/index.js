import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { createTheme,ThemeProvider } from '@mui/material/styles';
import  {blue}  from '@mui/material/colors';
import { AuthProvider } from './state/auth';

import App from './App';  

const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
      main: blue[100],
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
 