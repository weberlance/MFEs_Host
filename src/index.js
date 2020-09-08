import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";
import { initializeApi } from 'common/src/network/apis';
import { BASE_URL } from './utils/Constants';

initializeApi({ baseURL: BASE_URL });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
