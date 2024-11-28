//RenderRecipes.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
const RenderRecipes = ({ recipe }) => {
  const renderRecipeItem = ({ item }) => {
    return <Text style={styles.test}>{item.title}</Text>;
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
    color: "red",
  },
});
