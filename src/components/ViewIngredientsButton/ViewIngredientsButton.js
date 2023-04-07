//This code exports a functional component called ViewIngredientsButton which displays a button that can be 
//pressed. The component receives onPress as a prop which is a function that will be called when the button is 
//pressed. The button also displays the text "View Ingredients". The component also defines a prop-types 
//validation for onPress, source and title props.

import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function ViewIngredientsButton (props) {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>View Ingredients</Text>
        </View>
      </TouchableHighlight>
    );
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
