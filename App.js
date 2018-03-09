import React from "react";
import { Provider } from "react-redux";
import { StackNavigator } from "react-navigation";
import configureStore from "./src/store/configureStore";

import * as CategoriesAction from "./src/actions/categoriesActions";
import Tab from "./src/commons/Tab";
import Interests from "./src/screens/configurationContainer/interests";

const store = configureStore();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfigured: false
    };

    this.afterCategoriesSave = this.afterCategoriesSave.bind(this);
  }

  afterCategoriesSave() {
    this.setState({
      isConfigured: true
    });

    store.dispatch(CategoriesAction.getInterests());
  }

  render() {
    return (
      <Provider store={store}>
        {
          (this.state.isConfigured)
            ? <Tab />
            : <Interests afterSave={this.afterCategoriesSave}/>
        }
      </Provider>
    );
  }
}

export default App;
