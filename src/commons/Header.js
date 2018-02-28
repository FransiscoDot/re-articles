import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({onPress}) => {
  return (
    <Ionicons name="ios-menu" size={25} style={styles.header} onPress={onPress}/>
  );
};

Header.propTypes = {
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  header: {
    marginLeft: 10
  }
});

export default Header;
