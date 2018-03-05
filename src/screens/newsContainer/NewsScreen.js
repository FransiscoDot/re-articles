import React, {Component} from "react";
import PropTypes from "prop-types";
import { Container, Tabs, Tab, ScrollableTab } from "native-base";
import { StackNavigator } from "react-navigation";

import NewsTab from "./NewsTab";
import ArticleDetail from "./ArticleDetail";

const genres = [
  { title: "diplomacy", key: 0},
  { title: "music", key: 1},
  { title: "art", key: 2},
  { title: "design", key: 3},
  { title: "tech", key: 4},
  { title: "programming", key: 5},
  { title: "gaming", key: 6}
];

class NewsScreen extends Component {
  constructor(props) {
    super(props);

    this.renderTabs = this.renderTabs.bind(this);
  }

  renderTabs = (genre) => {
    return (
      <Tab key={genre.key} heading={genre.title}>
        <NewsTab genre={genre.title} navigation={this.props.navigation} />
      </Tab>
    );
  };

  render() {
    return (
      <Container>
        <Tabs
          renderTabBar={()=> <ScrollableTab />}
          tabBarUnderlineStyle={{backgroundColor: "#ff3287"}}>
            { genres.map(genre => this.renderTabs(genre)) }
        </Tabs>
      </Container>
    );
  }
}

NewsScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default StackNavigator({
  NewsScreen: {
    screen: NewsScreen,
    navigationOptions: ({
      title: "News feed"
    })
  },
  ArticleDetail: {
    screen: ArticleDetail,
    navigationOptions: ({
      title: "Article"
    })
  }
}, {
  navigationOptions: {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: "transparent"
    }
  }
});
