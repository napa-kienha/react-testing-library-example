import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./App";

const initialState = window.initialReduxState;

const store = configureStore(initialState);

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;
