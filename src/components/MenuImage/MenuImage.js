//This code exports a functional component called MenuImage which displays an image of a menu button that can be 
//pressed to trigger a specific action. It uses TouchableOpacity and Image components from the React Native 
//library, and it specifies the styling of these components using a stylesheet. 
//It also uses PropTypes to define the expected data types of the onPress prop.

import React from "react";
import { TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default function MenuImage(props) {
  return (
    <TouchableOpacity style={styles.headerButtonContainer} onPress={props.onPress}>
      <Image style={styles.headerButtonImage} source={require("../../../assets/icons/menu.png")} />
    </TouchableOpacity>
  );
}

MenuImage.propTypes = {
  onPress: PropTypes.func,
};
