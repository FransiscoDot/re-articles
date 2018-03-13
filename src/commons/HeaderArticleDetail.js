import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = ({onPressBook, onPressBookmark}) => {
  return (
    <View style={{flexDirection: "row"}}>
      <Ionicons name="ios-book-outline" size={30} style={styles.iconMenu} onPress={onPressBook}/>
      <Ionicons name="ios-bookmark-outline" size={30} style={styles.iconMenu} onPress={onPressBookmark}/>
    </View>
  );
};

Header.propTypes = {
  onPressBook: PropTypes.func,
  onPressBookmark: PropTypes.func
};

const styles = StyleSheet.create({
  iconMenu: {
    marginLeft: 10,
    marginRight: 10
  }
});

export default Header;
