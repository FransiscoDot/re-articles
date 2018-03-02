import React from "react";
import { Provider } from "react-redux";
import { StackNavigator } from "react-navigation";

import { getBreakingNews } from "./src/actions/newsAction";
import configureStore from "./src/store/configureStore";
import Drawer from "./src/commons/Drawer";
import Header from "./src/commons/Header";

const store = configureStore();

store.dispatch(getBreakingNews());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Drawer />
      </Provider>
    );
  }
}

export default StackNavigator({
  App: {
    screen: App
    // navigationOptions: ({ navigation }) => ({
    //   headerLeft : <Header onPress={() => navigation.navigate("DrawerToggle")}/>
    // }),
  },
})
