export default class News {
  constructor(title, url, urlToImage, description = null, source = null) {
    this.title = title;
    this.url = url;
    this.urlToImage = urlToImage;
    this.description = description;
    this.source = source;
  }
}
