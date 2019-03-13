import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import generateResponse from "./generator";
import { indicators } from "./redux/indicator";
import { periods } from "./redux/period";
import rootReducer from "./redux/rootReducer";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const data = generateResponse();
const preloadedState = {
  data,
  indicator: indicators.PRICE,
  period: periods.WEEK
};
const store = createStore(
  rootReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
