import React, {Component} from "react";
import { Container, Tab, Tabs, ScrollableTab } from "native-base";
import NewsList from "./NewsList";

class NewsScreen extends Component {
  render() {
    return (
      <Container>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Tab1">
            <NewsList />
          </Tab>
          <Tab heading="Tab2">
            <NewsList />
          </Tab>
          <Tab heading="Tab3">
            <NewsList />
          </Tab>
          <Tab heading="Tab4">
            <NewsList />
          </Tab>
          <Tab heading="Tab5">
            <NewsList />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default NewsScreen;
