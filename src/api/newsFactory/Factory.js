import NewsFromNewsApi from "./NewsFromNewsApi";
import NewsOption from "./NewsOption";

export default class Factory {
  constructor(option) {
    if (!option instanceof NewsOption)
      throw("Factory accept only instance of NewsOption");

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
