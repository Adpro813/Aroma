import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Platform
} from "react-native";
const InstructionCard = ({ step, stepCounter,data}) => {
    const formattedStep = step.replace(/\.([^\s])/g, '. $1');
    return(
    <View style={styles.card}>
    <Text style={styles.text}>{stepCounter}. {formattedStep}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: Platform.OS === 'ios' ? "75%" : "50%",
    height: 200,
    backgroundColor: "white",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 10,
    padding:10,
  },
  
  text: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left", 

  },

});

export default InstructionCard;
