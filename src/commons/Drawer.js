import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation"

import Tab from "../screens/tabContainer/Tab";
import ProfileScreen from "../screens/drawerContainer/ProfileScreen";

export default Drawer = DrawerNavigator({
  Home: { screen: Tab },
  Profile: { screen: ProfileScreen }
});
