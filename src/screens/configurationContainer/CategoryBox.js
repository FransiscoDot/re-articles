import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

const CategoryBox = ({category}) => {
  return (
    <TouchableHighlight style={styles.container}>
      <Text style={styles.text}>{category}</Text>
    </TouchableHighlight>
  );
};

CategoryBox.propTypes = {
  category: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    margin: 3,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 5
  },
  text: {
    color: "white",
    fontSize: 19,
    padding: 5,
    textAlign: "center",
    fontWeight: "600"
  }
});

export default CategoryBox;
