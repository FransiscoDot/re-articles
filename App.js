import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TabNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

import NewsScreen from "./src/screens/NewsScreen";
import CommunityScreen from "./src/screens/CommunityScreen";
import WriteScreen from "./src/screens/WriteScreen";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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

export default TabNavigator(
  {
    News: { screen: NewsScreen },
    Community: { screen: CommunityScreen },
    Write: { screen: WriteScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'News') {
          iconName = `ios-paper${focused ? '' : '-outline'}`;
        } else if (routeName === "Community") {
          iconName = `ios-people${focused ? '' : '-outline'}`;
        } else if (routeName == "Write") {
          iconName = `ios-folder-open${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ff3287',
      inactiveTintColor: 'white',
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: '#161614',
      },
    },
    swipeEnabled: true
  }
);
