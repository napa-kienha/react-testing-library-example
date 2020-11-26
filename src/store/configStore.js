import { createStore } from "redux";
import { appReducer } from "./ducks";

export default function configureStore(initialState) {
  const store = createStore(
    appReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
