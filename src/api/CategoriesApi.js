const delay = 1000;

let categories = [];

export default class CategoriesApi {
  static getCategories() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (categories.length == 0)
          reject("Categories cannot be empty when getCategories is executing");

        resolve(Object.assign([], categories));
      }, delay);
    });
  }

  static saveCategories(categories) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (categories.length == 0)
          reject("Categories cannot be empty when saveCategories is executing");

        categories = Object.assign([], categories);
      }, delay);
    });
  }
}
