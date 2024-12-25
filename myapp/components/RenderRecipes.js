//RenderRecipes.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import RecipeCard from "./RecipeCard"
const RenderRecipes = ({ recipes, navigation }) => {
  const renderRecipeItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <RecipeCard recipe = {item} navigation = {navigation}>
        </RecipeCard>
      </View>
    );
  };

  return (
    <FlatList
      data={recipes}
      keyExtractor={({ id }) => id}
      renderItem={renderRecipeItem}
      contentContainerStyle={styles.listCotainer}
    />
  );
  
};
const styles = StyleSheet.create({
  listCotainer: {
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 5,
    padding: 10,
  },
  
  itemContainer: {
    margin: 5,
  },
});
export default RenderRecipes;
