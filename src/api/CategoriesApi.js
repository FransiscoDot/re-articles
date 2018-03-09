const delay = 1000;

let Categories = [];

export default class CategoriesApi {
  static getInterests() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Categories.length == 0)
          reject("Categories cannot be empty when getCategories is executing");

        resolve(Object.assign([], Categories));
      }, delay);
    });
  }

  static saveCategories(categories) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (categories.length == 0)
          reject("Categories cannot be empty when saveCategories is executing");

        Categories = Object.assign([], categories);

        resolve();
      }, delay);
    });
  }
}
