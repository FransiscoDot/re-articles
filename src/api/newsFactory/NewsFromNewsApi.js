import axios from "axios";
import Article from "./Article";
import News from "./News";

const _getEverythingEndpoint = Symbol("get the url based on everything endpoint");
const _getHeadlinesEndpoint = Symbol("get the url based on headlines endpoint");
const _getApiKey = Symbol("api key for this api");
const _getEverythingEnpoint = Symbol("get the initial url for the everything endpoint");
const _getInterestsSupportCategorySearch = Symbol("get array of category supported by the headlines endpoint");

export default class NewsFromNewsApi {
  [_getApiKey]() {
    return "f69f2c78ba3248b89aa4128b5c3348c9";
  }

  [_getEverythingEnpoint]() {
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
      ? this[_getHeadlinesEndpoint]()
      : this[_getEverythingEndpoint]();

    return new Promise((resolve, reject) => {
      axios.get(endpoint, {}).then(response => {

        const news = response.data.articles.map(n => {
          return new News(n.title, n.url, n.urlToImage);
        })

        const article = new Article(news, this.option.interest);

        resolve(article);
      }).catch(error => {
        throw error;
      });
    })
  }

  [_getEverythingEndpoint]() {
      let endpoint = this[_getEverythingEnpoint]();

      endpoint += `q=${this.option.interest}`;

      endpoint += `&language=${this.option.language}`;

      if (this.option.newestArticles)
        endpoint += "&sortBy=publishedAt";

      endpoint += `&apiKey=${this[_getApiKey]()}`;

      return endpoint;
  }

  [_getHeadlinesEndpoint]() {
    let endpoint = this[_getHeadlinesEndpoint]();

    endpoint += `country=${this.option.country}`;

    if (this.option.category != undefined)
      endpoint += `&category=${this.option.category}`;

    endpoint += `&apiKey=${this[_getApiKey]()}`;

    return endpoint;
  }
}
