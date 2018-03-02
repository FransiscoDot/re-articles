import {createStore, applyMiddleware} from "redux";
import {newsReducer} from "../reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  return createStore(
    newsReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
