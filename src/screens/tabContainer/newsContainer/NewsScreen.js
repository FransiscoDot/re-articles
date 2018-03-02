import React, {Component} from "react";
import { Container, Tab, Tabs, ScrollableTab } from "native-base";

import NewsFeed from "./NewsFeed";

const genres = [
  { title: "culture", key: 0},
  { title: "music", key: 1},
  { title: "art", key: 2},
  { title: "design", key: 3},
  { title: "tech", key: 4},
  { title: "programming", key: 5},
  { title: "gaming", key: 6}
];

class NewsScreen extends Component {
  render() {
    return (
      <Container>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          { genres.map(genre =>
              (
                <Tab heading={genre.title} key={genre.key} >
                  <NewsFeed genre={genre.title}/>
                </Tab>
              )
            )
          }
        </Tabs>
      </Container>
    );
  }
}

export default NewsScreen;
