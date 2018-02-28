import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

import HomeScreen from "../screens/drawerContainer/HomeScreen";
import ProfileScreen from "../screens/drawerContainer/ProfileScreen";

export default Drawer = DrawerNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
});
