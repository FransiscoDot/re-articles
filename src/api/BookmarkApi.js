const delay = 1000;

let articleSaved = [];

export default class BookmarkApi {
  static getBookmarks() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], articleSaved));
      }, delay);
    });
  }

  static saveBookmark(article) {
    return new Promise(resolve => {
      setTimeout(() => {
        articleSaved = Object.assign([], articleSaved.concat(article));

        resolve();
      }, delay);
    });
  }
}
