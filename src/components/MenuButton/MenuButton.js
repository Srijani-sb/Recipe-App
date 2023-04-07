//This is a functional component called MenuButton that defines a custom button with an icon and a text label. 
//It takes in three props: onPress for the button's click handler, source for the icon source, and title for the 
//text label. The component also specifies the style for the button container, icon, and text using the styles 
//stylesheet. Additionally, the component sets propTypes for the props to ensure their type and validity.



import React from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default function MenuButton(props) {
  const { title, onPress, source } = props;

  return (
    <TouchableHighlight onPress={onPress} style={styles.btnClickContain} underlayColor="rgba(128, 128, 128, 0.1)">
      <View style={styles.btnContainer}>
        <Image source={source} style={styles.btnIcon} />
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

MenuButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
