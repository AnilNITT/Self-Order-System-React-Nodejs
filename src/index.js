import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { StoreProvider } from './Store';
import "./index.css";
const container = document.getElementById('root');

render(
  <StoreProvider>
    <App></App>
  </StoreProvider>,
  container
);
