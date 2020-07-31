import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './utils/theme';
import App from './App';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
