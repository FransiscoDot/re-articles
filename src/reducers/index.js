import {combineReducers} from "redux";
import news from "./newsReducer";
import categories from "./categoriesReducer";

export const rootReducer = combineReducers({
  categories,
  news
});

export default rootReducer;
