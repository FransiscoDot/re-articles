import axios from "axios";

const TOP_HEADLINES_ENDPOINT = "https://newsapi.org/v2/top-headlines?";
const API_KEY = "f69f2c78ba3248b89aa4128b5c3348c9";

export default class NewsApi {
  static getBreakingNews(country) {
      return axios.get(`${TOP_HEADLINES_ENDPOINT}country=${country}&apiKey=${API_KEY}`, {});
  }
}
