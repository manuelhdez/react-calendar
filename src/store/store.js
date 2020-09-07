import { createStore, compose, applyMiddleware } from "redux";
import { root } from "reducers/root";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  root,
  composeEnhancers(applyMiddleware(thunk))
);
