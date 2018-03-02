import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function news(state = initialState.news, action) {
  switch (action.type) {
    case types.LOAD_BREAKING_NEWS:
      return [
        ...state,
        Object.assign([], action.news)
      ];
    default:
      return state;
  }
}
