import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Tabs, Tab, ScrollableTab } from "native-base";
import { StackNavigator } from "react-navigation";

import NewsTab from "./NewsTab";
import ArticleDetail from "./ArticleDetail";

class NewsScreen extends Component {
  constructor(props) {
    super(props);

    this.renderTabs = this.renderTabs.bind(this);
  }

  renderTabs = (genre, index) => {
    return (
      <Tab key={index} heading={genre}>
        <NewsTab genre={genre} navigation={this.props.navigation} />
      </Tab>
    );
  };

  render() {
    return (
      <Container>
        <Tabs
          renderTabBar={()=> <ScrollableTab />}
          tabBarUnderlineStyle={{backgroundColor: "#ff3287"}}>
            { this.props.categories.map((genre, index) => this.renderTabs(genre, index)) }
        </Tabs>
      </Container>
    );
  }
}

NewsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

const newsScreenConnected = connect(mapStateToProps)(NewsScreen);

export default StackNavigator({
  NewsScreen: {
    screen: newsScreenConnected,
    navigationOptions: ({
      title: "News feed"
    })
  },
  ArticleDetail: {
    screen: ArticleDetail
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
