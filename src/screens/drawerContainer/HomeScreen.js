import React, {Component} from "react";
import { TabNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

import NewsScreen from "../tabContainer/NewsScreen";
import CommunityScreen from "../tabContainer/CommunityScreen";
import WriteScreen from "../tabContainer/WriteScreen";

export default HomeScreen = TabNavigator(
  {
    News: {
      screen: NewsScreen
    },
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
