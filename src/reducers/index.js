import {combineReducers} from "redux";
import news from "./newsReducer";

export const newsReducer = combineReducers({
  news
});

export default newsReducer;
