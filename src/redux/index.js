import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import user from "./user/reducer";

const logger = createLogger({
  collapsed: true
});

export const store = createStore(
  combineReducers({ user }),
  composeWithDevTools(applyMiddleware(thunk, logger))
);
