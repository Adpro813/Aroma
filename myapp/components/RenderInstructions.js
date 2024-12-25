//Render Instructions
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import RenderInstruction from "./RenderInstruction";
const RenderInstructions = ({ instructions }) => {
  return (
    <FlatList
      data={instructions.steps}
      keyExtractor={({ number }) => number.toString()}
      renderItem={RenderInstruction}
      contentContainerStyle = {styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF0E6",
    justifyContent: "center", //main axis (collumn)
    flexDirection: "column",
  },
});

export default RenderInstructions;
