import React from "react";
import PropTypes from "prop-types";
import { Container, Text } from "native-base";

const News = ({news}) => {
  return (
    <Container>
      <Text> I'm a news </Text>
    </Container>
  );
};

News.propTypes = {
  news: PropTypes.object.isRequired
};

export default News;
