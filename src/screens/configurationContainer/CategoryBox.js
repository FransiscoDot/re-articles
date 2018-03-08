import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

const CategoryBox = ({category, selected = false, onClick}) => {
  return (
    <TouchableHighlight style={styles.container} onPress={() => onClick(category)}>
      <Text style={[styles.text, (selected && styles.selected)]}>{category}</Text>
    </TouchableHighlight>
  );
};

CategoryBox.propTypes = {
  category: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
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
  },
  selected: {
    backgroundColor: "#50bbff"
  }
});

export default CategoryBox;
