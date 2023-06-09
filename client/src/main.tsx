import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import store from './store/index.js';

// const root = createRoot(document.getElementById("root"));
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
)

