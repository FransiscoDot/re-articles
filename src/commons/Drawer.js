import { DrawerNavigator } from "react-navigation";

import HomeScreen from "../screens/drawerContainer/HomeScreen";
import ProfileScreen from "../screens/drawerContainer/ProfileScreen";

const Drawer = DrawerNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
});


export default Drawer;
