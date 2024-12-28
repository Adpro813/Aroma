//Render Instructions
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import RenderInstruction from "./RenderInstruction";

const RenderInstructions = ({ instructions }) => {
  if (!instructions || instructions.length === 0) {
    return <Text style={styles.noText}>No instructions!</Text>;
  }

  const steps = instructions[0].steps;

  return (
    <FlatList
      data={steps}
      keyExtractor={({ number }) => number.toString()}
      renderItem={({ item, index }) => (
        <RenderInstruction data={steps} step={item.step} stepCounter={index + 1} />
      )}
      // Give the FlatList itself flex:1...
      style={styles.flatList}
      // ...but remove flex:1 from the contentContainer
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,                   // Let the list fill the screen
    backgroundColor: "#FAF0E6"
  },
  contentContainer: {
    paddingVertical: 10,       // Possibly some spacing
  },
  noText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});


export default RenderInstructions;
