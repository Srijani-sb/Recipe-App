//This code defines a React component named SplashScreen, which renders a View containing an Image of a cookie 
//with a specific style defined in a stylesheet. The image is loaded from a local asset using the require() function.
 //This component is likely intended to be displayed as a splash screen when the app is launched.


import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={require("../../../assets/icons/cookie100.png")} />
    </View>
  );
}
