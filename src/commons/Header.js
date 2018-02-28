import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({onPress}) => {
  return (
    <Ionicons name="ios-menu" size={25} style={styles.header} onPress={onPress}/>
  );
};

const styles = StyleSheet.create({
  header: {
    marginLeft: 10
  }
});

export default Header;
