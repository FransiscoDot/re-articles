import React from "react";
import { TabNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

import NewsScreen from "../screens/newsContainer/NewsScreen";
import CommunityScreen from "../screens/communityContainer/CommunityScreen";
import WriteScreen from "../screens/writeContainer/WriteScreen";
import BookmarkScreen from "../screens/bookmarksContainer/BookmarksScreen";

/* eslint-disable */

export default TabNavigator(
  {
    News: { screen: NewsScreen },
    Bookmarks: { screen: BookmarkScreen },
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
        } else if (routeName === "Bookmarks") {
          iconName = `ios-bookmarks${focused ? '' : '-outline'}`;
        } else if (routeName === 'News') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === "Community") {
          iconName = `ios-people${focused ? '' : '-outline'}`;
        } else if (routeName == "Write") {
          iconName = `ios-folder-open${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#50bbff',
      inactiveTintColor: 'white',
      tabBarPosition: "bottom",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: '#161614'
      },
    }
  }
);
