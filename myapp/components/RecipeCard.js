import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, Pressable } from "react-native";

const RecipeCard = ({ recipe }) => {
  return (
    <Pressable>
    <View style={styles.card}>
      <Text style = {styles.text}>{recipe.title}</Text>
      <Image source={{ uri: recipe.image }} style={styles.image} />
    </View>
    </Pressable>

  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    padding: 15,
    margin:10,
    width: 255,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#FAF0E6',
    
  },
  image: {
    width: 150,
    height: 150,
  },
  text:
  {
    textAlign:"center",
    fontWeight:"bold",
    marginBottom: 10,
  }
});
export default RecipeCard;