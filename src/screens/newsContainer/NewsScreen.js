import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Tabs, Tab, ScrollableTab } from "native-base";
import { StackNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

import NewsTab from "./NewsTab";
import ArticleDetail from "./ArticleDetail";

class NewsScreen extends Component {
  static navigationOptions = () => {
    return {
      title: "News feed",
      headerRight: <Ionicons
        name="ios-add-circle-outline"
        size={25}
        style={{paddingRight: 10}}/>
    };
 }

  constructor(props) {
    super(props);

    this.renderTabs = this.renderTabs.bind(this);
  }

  renderTabs = (interest, index) => {
    return (
      <Tab key={index} heading={interest}>
        <NewsTab interest={interest} navigation={this.props.navigation} />
      </Tab>
    );
  };

  render() {
    return (
      <Container>
        <Tabs
          renderTabBar={()=> <ScrollableTab />}
          tabBarUnderlineStyle={{backgroundColor: "#50bbff", height: 2}}
        >
            { this.props.interests.map((interest, index) => this.renderTabs(interest, index)) }
        </Tabs>
      </Container>
    );
  }
}

NewsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  interests: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    interests: state.interests
  };
}

const newsScreenConnected = connect(mapStateToProps)(NewsScreen);

export default StackNavigator({
  NewsScreen: {
    screen: newsScreenConnected
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
