export function articlesFilteredAndFormatted(news, genre) {
  if (news.length == 0)
    return news;

  let genreNews = news.filter(news => {
    if (news.genre == genre)
      return news;
  })[0];

  if (genreNews == null)
    return [];

  let articles = genreNews.articles.filter(article => {
    if (article.urlToImage != null)
      return article;
  });

  articles.forEach(article => {
    if (article.description == null)
      return;

    if (article.description.length > 80)
        article.description = article.description.substring(0, 80) + "...";
  });

  return articles;
}
