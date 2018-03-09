import axios from "axios";
import News from "./News";

const _getEverythingEndpoint = Symbol("get the url based on everything endpoint");
const _getHeadlinesEndpoint = Symbol("get the url based on headlines endpoint");

export default class NewsFromNewsApi {
  static get apiKey() {
    return "f69f2c78ba3248b89aa4128b5c3348c9";
  }

  static get everythingEnpoint() {
    return "https://newsapi.org/v2/everything?";
  }

  static get headlinesEndpoint() {
    return "https://newsapi.org/v2/top-headlines?";
  }

  static get keywordSupportCategorySearch() {
    return [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "technology",
      "sports"
    ];
  }

  constructor(option) {
    this.option = option;
  }

  getArticles() {
    const isSupportedFromCategorySearch = this
      .keywordSupportCategorySearch()
      .includes(this.option.interest);

    const endpoint = (isSupportedFromCategorySearch)
      ? this[_getHeadlinesEndpoint]()
      : this[_getEverythingEndpoint]();

    return axios.get(endpoint, {}).then(() => {

    });
  }

  [_getEverythingEndpoint]() {
      let endpoint = this.everythingEnpoint();

      endpoint += `q=${this.option.interest}`;

      endpoint += `&language=${this.option.language}`;

      if (this.option.newestArticles)
        endpoint += "&sortBy=publishedAt";

      endpoint += `&apiKey=${this.apiKey()}`;

      return endpoint;
  }

  [_getHeadlinesEndpoint]() {
    let endpoint = this.headlinesEndpoint();

    endpoint += `country=${this.option.country}`;

    if (this.option.category != undefined)
      endpoint += `&category=${this.option.category}`;

    endpoint += `&apiKey=${this.option.API_KEY}`;

    return endpoint;
  }
}
