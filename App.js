import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

import Drawer from "./src/commons/Drawer";
import Header from "./src/commons/Header";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> I'm App </Text>
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

export default StackNavigator({
  App: {
    screen: Drawer,
    navigationOptions: ({ navigation }) => ({
      headerLeft : <Header onPress={() => navigation.navigate("DrawerToggle")}/>
    }),
  },
})
