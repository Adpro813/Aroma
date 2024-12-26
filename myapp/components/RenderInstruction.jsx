import React from "react";
import { View, Text, StyleSheet } from "react-native";
import InstructionCard from "./InstructionCard";
const RenderInstruction = ({ step, stepCounter, data}) => {
  return (
    <View style={styles.container}>
      <InstructionCard data = {data} step = {step} stepCounter = {stepCounter}></InstructionCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    marginBottom: 15,
    justifyContent:"center",
    alignItems:"center"
  },
});

export default RenderInstruction;