import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = ({onPress}) => {
  return (
    <View>
      <Ionicons name="ios-book" size={25} style={styles.iconMenu} onPress={onPress}/>
    </View>
  );
};

Header.propTypes = {
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  iconMenu: {
    marginLeft: 10,
    marginRight: 10
  }
});

export default Header;
