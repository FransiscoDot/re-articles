import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function categories(state = initialState.categories, action) {
  switch(action.type) {
    case types.SAVE_CATEGORIES:
      return [
        ...state,
        Object.assign([], action.categories)
      ];

    default: return state;
  }
}
