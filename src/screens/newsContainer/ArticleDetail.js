import React from "react";
import PropTypes from "prop-types";
import { WebView } from "react-native";

const ArticleDetail = ({navigation}) => {
  return (
    <WebView
      source={{uri: navigation.state.params.url}}
    />
  );
};

ArticleDetail.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ArticleDetail;
