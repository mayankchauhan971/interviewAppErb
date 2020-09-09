import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";
import App from "../components/App";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement("div"))
  );
});
