//RenderRecipes.js

/**
 * Aditya TODO:
 * render recipe images, make the text/image render in the center, make them render together in a 
 * card type thing, etc. chicken barbeque.
 * 
 * Ansh TODO: 
 * -chicken barbqueke moneyp
 * ull huzz
 * ß
*/
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image} from "react-native";
const RenderRecipes = ({ recipe }) => {
  const renderRecipeItem = ({ item }) => {
    return(
        <Image 
        source = {{uri: item.uri}} 
        styles = {styles.test}>
        </Image> 
    );
  };
  return (
    <FlatList
      data={recipe}
      keyExtractor={({ id }) => id}
      renderItem={renderRecipeItem}
    />
  );
};
export default RenderRecipes;
const styles = StyleSheet.create({
  test: {
    width:100,
    height:100
  },
});