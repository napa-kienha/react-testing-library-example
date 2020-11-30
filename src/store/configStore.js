import { createStore, applyMiddleware } from "redux";
import { appReducer,rootSaga } from "./ducks";
import { sagaMiddleware } from "./middleware";

export default function configureStore(initialState) {
  const store = createStore(
    appReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga)
  return store;
}
