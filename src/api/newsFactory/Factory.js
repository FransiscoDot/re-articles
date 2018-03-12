import NewsFromNewsApi from "./NewsFromNewsApi";
import FactoryOption from "./FactoryOption";

export default class Factory {
  constructor(options) {
    if (!(options instanceof FactoryOption))
      throw("Factory accept only instance of NewsOption");

    this.options = options;
  }

  GetArticles() {
    const { options } = this;

    switch(options.apiType) {
      case "newsapi":
        return new NewsFromNewsApi(options).getArticles();
    }
  }
}
