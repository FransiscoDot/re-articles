import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, ImageBackground } from "react-native";
import { Fab, Icon } from "native-base";
import CategoryBox from "./CategoryBox";

const categories = [
  "diplomacy",
  "music",
  "art",
  "design",
  "tech",
  "programming",
  "gaming",
  "trump",
  "language",
  "gym",
  "cinema",
  "automotive",
  "economy",
  "diplomacy",
  "music",
  "art",
  "design",
  "tech",
  "programming",
  "gaming",
  "trump",
  "language",
  "gym",
  "cinema",
  "automotive",
  "economy"
];

class Interests extends Component {
  render() {
    return (
      <ImageBackground style={styles.container} source={{uri: "http://assets.signature-reads.com/wp-content/uploads/2017/09/books.jpg"}}>
        <View style={styles.containerWithAlpha}>
          <View style={styles.header}>
            <Text style={styles.headerDescription}>Select you're interests, we take care of what to show you</Text>
          </View>
          <View style={styles.body}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerScrollView}>
              {categories.map((category, index) => <CategoryBox key={index} category={category} />)}
            </ScrollView>
          </View>
          <View style={styles.footer}>
            <Fab
              direction="up"
              style={{ backgroundColor: '#50bbff' }}
              position="bottomRight">
              <Icon name="ios-arrow-round-forward-outline"/>
            </Fab>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

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

export default Interests;
