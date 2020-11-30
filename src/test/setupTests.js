// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import configureStore from "../store";
import { Provider } from "react-redux";

const initialState = window.initialReduxState;
const store = configureStore(initialState);

export const ReduxWrapper = ({ children, initStore = store }) => {
  return <Provider store={initStore}>{children}</Provider>;
};
