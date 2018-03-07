import React, { Component } from "react";
import PropTypes from "prop-types";
import { WebView, Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import read from "node-readability";

class ArticleDetail extends Component {
  constructor(props) {
    super(props);

    this.setState = {
      isReaderModeEnabled: false
    };

    this.enableReaderMode = this.enableReaderMode.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
     return {
         headerRight: <Ionicons
          name="ios-book-outline"
          size={25}
          onPress={() => navigation.state.params.enableReaderMode()}
          style={{paddingRight: 10}}/>
     };
  }

  enableReaderMode() {
    debugger;
    read(this.props.navigation.state.params.url, (error, article, meta) => {
      debugger;
    });
  }

  componentDidMount() {
    this.props.navigation.setParams({ enableReaderMode: this.enableReaderMode })
  }

  render() {
    return (
      <WebView
        source={{uri: this.props.navigation.state.params.url}}
      />
    );
  }
};

ArticleDetail.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ArticleDetail;
