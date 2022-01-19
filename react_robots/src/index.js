import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import App from "./containers/App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { searchRobots } from "./reducers";

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
