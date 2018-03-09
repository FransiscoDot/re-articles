export default class Article {
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
