import React, { Component } from "react";
import PropTypes from "prop-types";
import * as newsApi from "../../actions/newsAction";
import { connect } from 'react-redux';

import NewsFeed from "./NewsFeed";

const categoryEnabledFromApi = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "technology",
  "sports"
];

class NewsTab extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.genre == undefined)
      throw "Genre cannot be undefined";

    const categoryEnabled = categoryEnabledFromApi.filter(category => {
      if (category === this.props.genre)
        return category;
    })[0];

    if (categoryEnabled != null)
      this.props.dispatch(newsApi.getBreakingNews("it", categoryEnabled));
    else
      this.props.dispatch(newsApi.getEverythingNews(this.props.genre, "it"));
  }

  render() {
    return (
      <NewsFeed genre={this.props.genre} navigation={this.props.navigation}/>
    );
  }
}

NewsTab.propTypes = {
  genre: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect()(NewsTab);
