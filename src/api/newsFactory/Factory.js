import NewsFromNewsApi from "./NewsFromNewsApi";
import FactoryOption from "./NewsOption";

export default class Factory {
  constructor(option) {
    if (!(option instanceof FactoryOption))
      throw("Factory accept only instance of NewsOption");

    this.option = option;
  }

  GetArticles() {
    const { option } = this;

    switch(option.apiType) {
      case "newsapi":
        return new NewsFromNewsApi(this.option).getArticles();
    }
  }
}
