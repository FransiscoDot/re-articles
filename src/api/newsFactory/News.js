export default class News {
  constructor(title, url, urlToImage, description = null, source = null) {
    this.title = title;
    this.url = url;
    this.urlToImage = urlToImage;
    this.description = (description != null && description.length > 80) ? description.substring(0, 80) + ".." : description;
    this.source = source;
  }
}
