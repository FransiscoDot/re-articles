import React, { Component } from "react";
import PropTypes from "prop-types";
import * as articlesAction from "../../actions/ArticlesAction";
import { connect } from 'react-redux';

import NewsFeed from "./NewsFeed";

class NewsTab extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.interest == undefined)
      throw "Interest cannot be undefined";

    this.props.dispatch(articlesAction.getArticles("newsapi", this.props.interest, "it", "it"));
  }

  render() {
    return (
      <NewsFeed interest={this.props.interest} navigation={this.props.navigation}/>
    );
  }
}

NewsTab.propTypes = {
  interest: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect()(NewsTab);
