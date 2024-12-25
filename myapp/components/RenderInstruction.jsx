import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RenderInstruction = ({ step }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{step}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});

export default RenderInstruction;