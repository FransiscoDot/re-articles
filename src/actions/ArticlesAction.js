import * as types from "./actionTypes";
import NewsApi from "../api/NewsApi";
import Factory from "../api/newsFactory/Factory";
import FactoryOption from "../api/newsFactory/FactoryOption";

export function loadBreakingNews(news) {
  return {
    type: types.LOAD_BREAKING_NEWS,
    news
  };
}

export function loadEverythingNews(news) {
  return {
    type: types.LOAD_EVERYTHING_NEWS,
    news
  };
}

export function getArticles(apiType, interest, language, country, sortBy = null) {
  return function(dispatch) {

    const option = new FactoryOption(
      apiType,
      interest,
      language,
      country,
      sortBy
    );

    return new Factory(option).GetArticles().then(articles => {
      dispatch(loadEverythingNews(articles));
    }).catch(error => {
      throw error;
    });
  };
}

export function getBreakingNews(country, category) {
  return function(dispatch) {
    return NewsApi.getBreakingNews(country, category).then(response => {

      const news = {
        articles: response.data.articles,
        genre: category
      };

      dispatch(loadBreakingNews(news));
    }).catch(error => {
      throw error;
    });
  };
}

export function getEverythingNews(about, language) {
  return function(dispatch) {
    return NewsApi.getEverythingNews(about, language).then(response => {

      const news = {
        articles: response.data.articles,
        genre: about
      };

      dispatch(loadEverythingNews(news));
    }).catch(error => {
      throw error;
    });
  };
}
