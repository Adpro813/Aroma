//RenderRecipes.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
const RenderRecipes = ({ recipe }) => {
  const renderRecipeItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <RecipeCard></RecipeCard>
      </View>
    );
  };
  const RecipeCard = () => {
    <View style = {styles.card}>
      {/* TODO: Render the recipes with the images în a card like format
       */}
    </View>
  };
  return (
    <FlatList
      data={recipe}
      keyExtractor={({ id }) => id}
      renderItem={renderRecipeItem}
      contentContainerStyle={styles.listCotainer}
    />
  );
};
const styles = StyleSheet.create({
  card:
  {

  },
  listCotainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
  itemContainer: {
    alignItems: "center",
  },
});
export default RenderRecipes;
