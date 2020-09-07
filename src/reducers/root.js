import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";

export const root = combineReducers({
  ui: uiReducer,
});
