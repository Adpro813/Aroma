//Render Instructions
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import RenderInstruction from "./RenderInstruction";

const RenderInstructions = ({ instructions }) => {

  console.log("reached instructions")
  if (!instructions || instructions.length === 0) {
    return(
      <Text style = {styles.text}>No instrunctions for this recipe!</Text>
    );
  }

  const steps = instructions[0].steps;

  return (
    <FlatList
      data={steps}
      keyExtractor={({ number }) => number.toString()}
      renderItem={({ item, index}) => 
      <RenderInstruction data = {steps} step={item.step} stepCounter = {index+1}/>
      }
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF0E6",
    justifyContent: "flex-start",
    // alignItems: "center",
    flexDirection: "column",
  },
  text: {
    fontWeight: "bold",
    textAlign:"center",
    // textAlignVertical:"center"
  },
});

export default RenderInstructions;
