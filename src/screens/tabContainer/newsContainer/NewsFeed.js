import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet } from "react-native";
import { Container, Text, List, ListItem } from "native-base";

import News from "./News";

class NewsFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
         <List dataArray={this.props.news}
            renderRow={(item) =>
              (
                <ListItem>
                  <Text>{item.title}</Text>
                </ListItem>
              )
            }
          />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

NewsFeed.propTypes = {
  news: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    news: (state.news.length > 0) ? state.news[0] : state.news
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
