import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function bookmars(state = initialState.bookmarks, action) {
  switch(action.type) {
    case types.SAVE_CATEGORIES:
      return true;

    case types.LOAD_BOOKMARKS:
      return [
        ...state,
        Object.assign([], action.bookmarks)
      ];

    default:
      return state;
  }
}
