

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';


ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
