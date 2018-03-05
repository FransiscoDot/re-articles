import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, ImageBackground, Text, View, TouchableHighlight   } from 'react-native';

const ArticlePreview = ({article, navigation}) => {
  return (
    <TouchableHighlight onPress={() => navigation.navigate("ArticleDetail", {url: article.url} )}>
      <ImageBackground
        source={{uri: article.urlToImage}}
        style={styles.container} >
          <View style={styles.textContainer}>
            {
              article.source.name != null && <Text style={styles.source}>{article.source.name}</Text>
            }
            <Text style={styles.description}>{article.description}</Text>
          </View>
      </ImageBackground>
    </TouchableHighlight>
  );
};

ArticlePreview.propTypes = {
  article: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "column",
    justifyContent: "flex-end",
    height: 300,
    width: null
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,.6)'
  },
  source: {
    marginTop: 3,
    marginLeft: 10,
    marginBottom: 1,
    color: "#ff3287",
    fontWeight: "bold",
    fontSize: 12
  },
  description: {
    marginTop: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  }
});

export default ArticlePreview;
