import * as types from "./actionTypes";
import BookmarkApi from "../api/BookmarkApi";

export function loadBookmarks(bookmarks) {
  return {
    type: types.LOAD_BOOKMARKS,
    bookmarks
  };
}

export function saveBookmars() {
  return {
    type: types.SAVE_BOOKMARK
  };
}

export function getBookmars() {
  return function(dispatch) {
    return BookmarkApi.getBookmarks().then(bookmarks => {
      dispatch(loadBookmarks(bookmarks));
    }).catch(error => {
      throw error;
    });
  };
}

export function createBookmark(article) {
  return function(dispatch) {
    return BookmarkApi.saveBookmark(article).then(() => {
      dispatch(saveBookmars());
    }).catch(error => {
      throw error;
    });
  };
}
