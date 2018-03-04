import React from "react";
import { Provider } from "react-redux";
import { StackNavigator } from "react-navigation";
import configureStore from "./src/store/configureStore";

import Tab from "./src/commons/Tab";
import Header from "./src/commons/Header";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Tab />
      </Provider>
    );
  }
}

export default App;
