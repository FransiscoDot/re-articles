import React, { Component } from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, View, ScrollView, Text, ImageBackground } from "react-native";
import { Fab, Icon } from "native-base";

import * as interestsActions from "../../actions/interestsActions";
import InterestBox from "./InterestBox";

const interests = [
  "diplomacy",
  "music",
  "art",
  "design",
  "programming",
  "gaming",
  "trump",
  "literature",
  "language",
  "gym",
  "cinema",
  "automotive",
  "economy",
  "general",
  "science",
  "technology",
  "business",
  "entertainment",
  "software development",
  "sports",
];

class Interests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interestsSelected: []
    };

    this.onSave = this.onSave.bind(this);
    this.renderInterestsBox = this.renderInterestsBox.bind(this);
    this.onClickInterest = this.onClickInterest.bind(this);
  }

  onSave() {
    this.props.dispatch(interestsActions.createInterestsConfiguration(this.state.interestsSelected))
      .then(() => {
        this.props.afterSave();
      });
  }

  onClickInterest(interest) {
    const isSelected = this.state.interestsSelected.includes(interest);

    this.setState(prevState => {
      return {
        interestsSelected: (!isSelected)
          ? prevState.interestsSelected.concat(interest)
          : prevState.interestsSelected.filter(c => {
            if (c !== interest)
              return c;
            })
      };
    });
  }

  renderInterestsBox(interest, index) {
    const isSelected = this.state.interestsSelected.includes(interest);

    return (
      <InterestBox key={index} interest={interest} selected={isSelected} onClick={this.onClickInterest}/>
    );
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={{uri: "http://assets.signature-reads.com/wp-content/uploads/2017/09/books.jpg"}}>
        <View style={styles.containerWithAlpha}>
          <View style={styles.header}>
            <Text style={styles.headerDescription}>Select you're interests, we take care of what to show you</Text>
          </View>
          <View style={styles.body}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerScrollView}>
              {interests.map((category, index) => this.renderInterestsBox(category, index))}
            </ScrollView>
          </View>
          <View style={styles.footer}>
            <Fab
              direction="up"
              style={{ backgroundColor: "#50bbff" }}
              position="bottomRight"
              onPress={this.onSave}>
                <Icon name="ios-arrow-round-forward-outline"/>
            </Fab>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

Interests.propTypes = {
  dispatch: Proptypes.func.isRequired,
  afterSave: Proptypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerWithAlpha: {
    backgroundColor: "rgba(0,0,0,.4)",
    flex: 1
  },
  header: {
    flex: 2,
    justifyContent: "center"
  },
  headerDescription: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 20
  },
  body: {
    flex: 8,
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  scrollView: {
    flexDirection: "column"
  },
  contentContainerScrollView: {
    padding: 10,
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection:"row"
  },
  footer: {
    flex: 1,
    alignItems: "flex-end"
  }
});

export default connect()(Interests);
