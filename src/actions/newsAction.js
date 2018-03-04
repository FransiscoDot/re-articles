import * as types from "./actionTypes";
import NewsApi from "../api/NewsApi";

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

export function getBreakingNews(country, category) {
  return function(dispatch) {
    return NewsApi.getBreakingNews(country, category).then(response => {
      dispatch(loadBreakingNews(response.data.articles));
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
