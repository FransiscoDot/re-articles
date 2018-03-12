import News from "./News";

export default class Articles {
  constructor(news, about) {
    if (!news.every(news => news instanceof News))
      throw("The property articles of News class must contain only Article instance");

    if (about == null)
      throw("Cannot create News without about");

    this.about = about;
    this.news = news.filter(news => {
      if (news.urlToImage != null && news.urlToImage != "" && news.urlToImage != " ")
        if (news.title != null || news.description != null)
          return news;
    });
  }
}
