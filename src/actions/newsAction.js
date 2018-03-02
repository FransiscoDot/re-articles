import * as types from "./actionTypes";
import NewsApi from "../api/NewsApi";

export function loadBreakingNews(news) {
  return {
    type: types.LOAD_BREAKING_NEWS,
    news
  };
}

export function getBreakingNews() {
  return function(dispatch) {
    return NewsApi.getBreakingNews("it").then(response => {
      dispatch(loadBreakingNews(response.data.articles));
    }).catch(error => {
      throw error;
    });
  };
}
