import NewsFromNewsApi from "./NewsFromNewsApi";

export default class Factory {
  constructor(option) {
    if (option.type == null || option.type == "")
      throw("The property type of option cannot be null or empty, neet to must be a valid type proeprty for option factory");

    this.option = option;
  }

  CreateArticles() {
    const { option } = this;

    switch(option.apiType) {
      case "NewsFromNewsApi":
        return new NewsFromNewsApi(this.option);
    }
  }
}
