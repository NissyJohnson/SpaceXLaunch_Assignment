import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./redux/reducers/reducer";
import "./index.css";
import App from "./App";

const store = createStore(
  Reducer,
  compose(applyMiddleware(thunk), composeWithDevTools())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
