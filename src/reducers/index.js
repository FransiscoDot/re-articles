import {combineReducers} from "redux";
import news from "./newsReducer";
import interests from "./interestsReducer";

export const rootReducer = combineReducers({
  interests,
  news
});

export default rootReducer;
