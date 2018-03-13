import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { WebView } from "react-native";

import * as bookmarkActions from "../../actions/bookmarkActions";
import HeaderArticleDetail from "../../commons/HeaderArticleDetail";

class ArticleDetail extends Component {
  static navigationOptions = ({ navigation }) => {
     return {
        tabBarVisible: false,
        headerRight: <HeaderArticleDetail
          onPressBook={() => navigation.state.params.enableReaderMode()}
          onPressBookmark={() => navigation.state.params.saveBookmark()}/>
     };
  }

  constructor(props) {
    super(props);

    this.setState = {
      isReaderModeEnabled: false
    };

    this.enableReaderMode = this.enableReaderMode.bind(this);
    this.saveBookmark = this.saveBookmark.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({ enableReaderMode: this.enableReaderMode });
    this.props.navigation.setParams({ saveBookmark: this.saveBookmark });
  }

  enableReaderMode() {
    // Need to Node.js api based for use Readability library.
  }

  saveBookmark() {
    const { article } = this.props.navigation.state.params;

    this.props.dispatch(bookmarkActions.createBookmark(article));
  }

  render() {
    const { article } = this.props.navigation.state.params;
    return (
      <WebView
        source={{uri: article.url}}
      />
    );
  }
}

ArticleDetail.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookmarkActions, dispatch)
  };
}

export default connect(mapDispatchToProps)(ArticleDetail);
