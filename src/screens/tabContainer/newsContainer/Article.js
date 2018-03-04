import React from "react";
import PropTypes from "prop-types";
import { WebView } from "react-native";

const Article = ({url}) => {
  return (
    <WebView
      source={{uri: url}}
    />
  );
};

Article.propTypes = {
  url: PropTypes.string.isRequired
};

export default Article;
