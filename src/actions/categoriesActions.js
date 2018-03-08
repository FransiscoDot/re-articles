import * as types from "./actionTypes";

export function saveCategories(categories) {
  return {
    type: types.SAVE_CATEGORIES,
    categories
  };
}
