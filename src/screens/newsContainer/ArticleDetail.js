import React, { Component } from "react";
import PropTypes from "prop-types";
import { WebView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

class ArticleDetail extends Component {
  static navigationOptions = ({ navigation }) => {
     return {
         headerRight: <Ionicons
          name="ios-book-outline"
          size={25}
          onPress={() => navigation.state.params.enableReaderMode()}
          style={{paddingRight: 10}}/>
     };
  }

  constructor(props) {
    super(props);

    this.setState = {
      isReaderModeEnabled: false
    };

    this.enableReaderMode = this.enableReaderMode.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({ enableReaderMode: this.enableReaderMode });
  }

  enableReaderMode() {}


  render() {
    return (
      <WebView
        source={{uri: this.props.navigation.state.params.url}}
      />
    );
  }
}

ArticleDetail.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ArticleDetail;
