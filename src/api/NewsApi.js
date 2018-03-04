import axios from "axios";

const TOP_HEADLINES_ENDPOINT = "https://newsapi.org/v2/top-headlines?";
const EVERYTHING_ENDPOINT = "https://newsapi.org/v2/everything?";
const API_KEY = "f69f2c78ba3248b89aa4128b5c3348c9";

export default class NewsApi {
  static getBreakingNews(country, category = undefined) {
      let endpoint = TOP_HEADLINES_ENDPOINT;

      endpoint += `country=${country}`;

      if (category != undefined)
        endpoint += `&category=${category}`;

      endpoint += `&apiKey=${API_KEY}`;

      return axios.get(endpoint, {});
  }

  static getEverythingNews(about, language = undefined, newestArticles = false) {
    let endpoint = EVERYTHING_ENDPOINT;

    endpoint += `q=${about}`;

    if (language != undefined)
      endpoint += `&language=${language}`;

    if (newestArticles)
      endpoint += "&sortBy=publishedAt";

    endpoint += `&apiKey=${API_KEY}`;

    return axios.get(endpoint, {});
  }
}
