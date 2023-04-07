//This code defines a React component called IngredientsDetailsScreen that displays
// a list of ingredients with their corresponding quantities. The component receives navigation and route objects
// as props, and uses useLayoutEffect to set the title and header style of the screen.

//The component renders a FlatList with a list of ingredients and their quantities, and uses the renderIngredient 
//function to render each item in the list. The onPressIngredient function is called when an ingredient is pressed,
// and it navigates to the Ingredient screen passing the ingredient ID and name as parameters.


import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { getIngredientName, getAllIngredients } from "../../data/MockDataAPI";

export default function IngredientsDetailsScreen(props) {
  const { navigation, route } = props;

  const item = route.params?.ingredients;
  const ingredientsArray = getAllIngredients(item);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerTitleStyle: {
        fontSize: 16,
      },
    });
  }, []);

  const onPressIngredient = (item) => {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    navigation.navigate("Ingredient", { ingredient, name });
  };

  const renderIngredient = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressIngredient(item[0])}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: "grey" }}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={3} data={ingredientsArray} renderItem={renderIngredient} keyExtractor={(item) => `${item.recipeId}`} />
    </View>
  );
}
