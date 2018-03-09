import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function categories(state = initialState.interests, action) {
  switch(action.type) {
    case types.SAVE_CATEGORIES:
      return [
        ...state
      ];

    case types.LOAD_INTERESTS:
      return Object.assign([], action.interests);

    default: return state;
  }
}
