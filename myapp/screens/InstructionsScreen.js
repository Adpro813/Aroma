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
            apiKey: "f649ff29c7db47f0997943636ce3ab7d",
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
