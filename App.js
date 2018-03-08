import React from "react";
import { Provider } from "react-redux";
import { StackNavigator } from "react-navigation";
import configureStore from "./src/store/configureStore";

import Tab from "./src/commons/Tab";
import Interests from "./src/screens/configurationContainer/interests";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Interests />
      </Provider>
    );
  }
}

export default StackNavigator({
  App: { screen: App }
});
