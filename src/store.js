import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import { initialState } from "./initialState";

const middlewares = [thunk];

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);
