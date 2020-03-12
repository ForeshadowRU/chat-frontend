import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./App";
import * as serviceWorker from "./serviceWorker";
import { store } from "./redux";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { history } from "./helpers/history";

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Main />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
