//This code defines a React Native functional component called HomeScreen that displays a list of recipes. 
//It imports styles, recipe data and components like MenuImage and TouchableHighlight from other files.

//The component uses useLayoutEffect hook to set navigation options for the screen header.
// The options include a MenuImage component for the left header button and an empty View component for the
// right header button.

//The component defines a function called onPressRecipe that navigates to a recipe detail screen when a recipe 
//item is pressed. It also defines a function called renderRecipes that maps each recipe item in the data array
// to a View component that displays the recipe photo, title and category.

//Finally, the component returns a FlatList component that displays the mapped recipe items in a grid format.

import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";

export default function HomeScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={recipes} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />
    </View>
  );
}
