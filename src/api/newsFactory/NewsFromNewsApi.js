import axios from "axios";
import Articles from "./Articles";
import News from "./News";

const _getApiKey = Symbol("api key");
const _getEverythingEndpoint = Symbol("initial url for the everything endpoint");
const _getHeadlinesEndpoint = Symbol("initial url for the headlines endpoint");
const _getInterestsSupportCategorySearch = Symbol("array of category supported by the headlines endpoint");
const _getEverythingUrl = Symbol("url based on everything endpoint");
const _getHeadlinesUrl = Symbol("url based on headlines endpoint");

export default class NewsFromNewsApi {
  [_getApiKey]() {
    return "f69f2c78ba3248b89aa4128b5c3348c9";
  }

  [_getEverythingEndpoint]() {
    return "https://newsapi.org/v2/everything?";
  }

  [_getHeadlinesEndpoint]() {
    return "https://newsapi.org/v2/top-headlines?";
  }

  [_getInterestsSupportCategorySearch]() {
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
    const isSupportedFromCategorySearch = this[_getInterestsSupportCategorySearch]()
      .includes(this.option.interest);

    const endpoint = (isSupportedFromCategorySearch)
      ? this[_getHeadlinesUrl]()
      : this[_getEverythingUrl]();

    return new Promise(resolve => {
      axios.get(endpoint, {}).then(response => {

        const newsList = response.data.articles.map(n => {
          return new News(n.title, n.url, n.urlToImage, n.source.name);
        });

        const articles = new Articles(newsList, this.option.interest);

        resolve(articles);
      }).catch(error => {
        throw error;
      });
    });
  }

  [_getEverythingUrl]() {
      let endpoint = this[_getEverythingEndpoint]();

      endpoint += `q=${this.option.interest}`;

      endpoint += `&language=${this.option.language}`;

      if (this.option.newestArticles)
        endpoint += "&sortBy=publishedAt";

      endpoint += `&apiKey=${this[_getApiKey]()}`;

      return endpoint;
  }

  [_getHeadlinesUrl]() {
    let endpoint = this[_getHeadlinesEndpoint]();

    endpoint += `country=${this.option.country}`;

    endpoint += `&category=${this.option.interest}`;

    endpoint += `&apiKey=${this[_getApiKey]()}`;

    return endpoint;
  }
}
