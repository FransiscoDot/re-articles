import * as types from "./actionTypes";
import CategoriesApi from "../api/CategoriesApi";

export function saveCategories() {
  return {
    type: types.SAVE_CATEGORIES
  };
}

export function loadInterests(interests) {
  return {
    type: types.LOAD_INTERESTS,
    interests
  };
}

export function createCategoriesConfiguration(categories) {
  return function(dispatch) {
    return CategoriesApi.saveCategories(categories).then(() => {
      dispatch(saveCategories());
    }).catch(error => {
      throw error;
    });
  };
}

export function getInterests() {
  return function(dispatch) {
    return CategoriesApi.getInterests().then(interests => {
      dispatch(loadInterests(interests));
    }).catch(error => {
      throw error;
    });
  };
}
