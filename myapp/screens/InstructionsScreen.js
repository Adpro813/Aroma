import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import RenderInstructions from "../components/RenderInstructions";

const InstructionsScreen = () => {
  const route = useRoute();
  const { id } = route.params;
  const [instructions, setInstructions] = useState([]);

  const fetchInstructions = async () => {
    if (!id) return;
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`,
        {
          params: {
            apiKey: "1486f6ee64af433c9fb1d20d41e49e2a",
          },
        }
      );
      const data = response.data;      
      console.log(data);
      setInstructions(data);
    } catch (error) {
      console.log("Error searching for instructions:", error);
    }
  };

  useEffect(() => {
    fetchInstructions();
  }, [id]);

  return (
    <View style={styles.container}>
      <RenderInstructions instructions={instructions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  step: {
    fontSize: 16,
    marginBottom: 12,
  },
});

export default InstructionsScreen;
