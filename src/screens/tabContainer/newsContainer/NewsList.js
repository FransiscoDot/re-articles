import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Text } from "native-base";

class NewsList extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text>News list</Text>
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

export default NewsList;
