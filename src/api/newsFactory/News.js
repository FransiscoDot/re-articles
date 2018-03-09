import Article from "./Article";

export default class News {
  constructor(articles, about) {
    if (!articles.every(article => article instanceof Article))
      throw("The property articles of News class must contain only Article instance");

    if (about == null)
      throw("Cannot create News without about");

    this.about = about;
    this.articles = articles.filter(article => {
      if (article.urlToImage != null && article.urlToImage != "" && article.urlToImage != " ")
        return article;
    });
  }
}
