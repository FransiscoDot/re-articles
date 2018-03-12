import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet } from "react-native";
import { Container, List } from "native-base";

import * as articlesActions from "../../actions/ArticlesAction";
import ArticlePreview from "./ArticlePreview";

class NewsFeed extends Component {
  constructor(props) {
    super(props);

    this.renderArticlesPreview = this.renderArticlesPreview.bind(this);
  }

  renderArticlesPreview = item => {
    return (
      <ArticlePreview article={item} navigation={this.props.navigation} />
    );
  };

  render() {
    return (
      <Container style={styles.container}>
         <List dataArray={this.props.news}
            renderRow={(item) =>
              (
               item.urlToImage != undefined && this.renderArticlesPreview(item)
              )
            }
          />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

NewsFeed.propTypes = {
  news: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let articles = state.news.filter(news => {
    if (news.interest == ownProps.interest)
      return news;
  })[0];

  return {
    news: (articles != undefined) ? articles.news : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articlesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

