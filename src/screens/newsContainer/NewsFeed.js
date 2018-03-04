import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet } from "react-native";
import { Container, List } from "native-base";
import * as newsActions from "../../actions/newsAction";
import { articlesFilteredAndFormatted } from "../../selectors/selectors";

import ArticlePreview from "./ArticlePreview";

class NewsFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
         <List dataArray={this.props.articles}
            renderRow={(item) =>
              (
               item.urlToImage != undefined && <ArticlePreview {...item}/>
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
  articles: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  const articles = articlesFilteredAndFormatted(state.news, ownProps.screenProps);

  return {
    articles: articles,
    genre: ownProps.screenProps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
