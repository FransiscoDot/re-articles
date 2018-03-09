export default class News {
  constructor(articles, about) {
    if (about == null)
      throw("Cannot create articles without about");

    this.about = about;
    this.articles = articles.filter(article => {
      if (article.urlToImage != null && article.urlToImage != "" && article.urlToImage != " ")
        return article;
    });
  }
}
