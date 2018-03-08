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

class ArticlesFromNewsApi extends Articles {
  static get apiKey() {
    return "f69f2c78ba3248b89aa4128b5c3348c9";
  }

  static get everythingEnpoint() {
    return "https://newsapi.org/v2/everything?";
  }

  static get headlinesEndpoint() {
    return "https://newsapi.org/v2/top-headlines?";
  }

  constructor(option) {
    super([], option.genre);

    this.genre = option.genre;
  }

  fetchArticles
}
