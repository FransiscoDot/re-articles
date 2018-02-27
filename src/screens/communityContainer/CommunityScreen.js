import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";

class CommunityScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm CommunityScreen</Text>
      </View>
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

export default CommunityScreen;
