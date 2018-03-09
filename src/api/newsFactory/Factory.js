import axios from "axios";

export default class Factory {
  constructor(option) {
    if (option.type == null || option.type == "")
      throw("The property type of option cannot be null or empty");

    this.option = option;
  }

  CreateArticles() {
    const { option } = this;

    switch(option.apiType) {
      case "ArticlesFromNewsApi":
        return
    }
  }
}

class Articles {
  constructor(articles, genre) {
    if (genre == null)
      throw("Cannot create articles without genre");

    this.articles = articles;
    this.genre = genre;
  }
}

class Article {
  constructor(title, description = null, source = null, url, urlToImage) {
    if (title == null || url == null || urlToImage)
      throw("Cannot create article without title, url or urlToImage");

    this.title = title;
    this.description = description;
    this.source = source;
    this.url = url;
    this.urlToImage;
  }
}

class ArticlesFromNewsApi {
  static get apiKey() {
    return "f69f2c78ba3248b89aa4128b5c3348c9";
  }

  static get everythingEnpoint() {
    return "https://newsapi.org/v2/everything?";
  }

  static get headlinesEndpoint() {
    return "https://newsapi.org/v2/top-headlines?";
  }

  static get interestSupportCategorySearch() {
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
    super([], option.genre);

    this.option = option;
  }

  fetchArticles() {
    const interestSupportCategorySearch = this
      .interestSupportCategorySearch()
      .includes(this.option.interest);

    const endpoint = (interestSupportCategorySearch)
      ? this._getHeadlinesEndpoint()
      : this._getEverythingEndpoint()

    return axios.get(endpoint, {}).then(response => {

    });
  }

  _getEverythingEndpoint() {
      let endpoint = this.everythingEnpoint();

      endpoint += `q=${this.option.interest}`;

      endpoint += `&language=${this.option.language}`;

      if (this.option.newestArticles)
        endpoint += "&sortBy=publishedAt";

      endpoint += `&apiKey=${this.apiKey()}`;

      return endpoint;
  }

  _getHeadlinesEndpoint() {
    let endpoint = this.headlinesEndpoint();

    endpoint += `country=${this.option.country}`;

    if (category != undefined)
      endpoint += `&category=${this.option.category}`;

    endpoint += `&apiKey=${API_KEY}`
  }
}
