import {combineReducers} from "redux";
import news from "./newsReducer";
import interests from "./interestsReducer";
import bookmarks from "./bookmarsReducer";

export const rootReducer = combineReducers({
  interests,
  news,
  bookmarks
});

export default rootReducer;
