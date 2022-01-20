import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./containers/App";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
// import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { searchRobots, requestRobots } from "./reducers";

// const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
