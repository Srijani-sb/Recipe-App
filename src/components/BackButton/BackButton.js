//This code exports a functional component called BackButton that displays an image button with a back arrow icon. 
//The component receives an onPress function as a prop to be executed when the button is pressed. 
//It also uses PropTypes to define the expected types of props passed to the component.




import React from "react";
import { TouchableHighlight, Image, } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default function BackButton(props) {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.btnContainer}>
      <Image source={require("../../../assets/icons/backArrow.png")} style={styles.btnIcon} />
    </TouchableHighlight>
  );
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
