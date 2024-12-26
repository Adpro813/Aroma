//HomeScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import RenderRecipes from "../components/RenderRecipes";

/**
 * HomeScreen Component
 * In progress, will change.
 * HomeScreen allows users to search for recipes based on a list of ingredients.
 * Users can add ingredients to a list, and the component fetches relevant recipes.
 *
 */
const HomeScreen = ({navigation}) => {
  const [ingredientsList, setIngredientsList] = useState(["onion"]);
  const [recipes, setRecipes] = useState([]);
  const [inputText, setInputText] = useState(""); //temp variable later transfered to ingredientsList, used to manage input
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const number = 15; //todo: allow users to select

  /**
   * Asynchronously fetches recipes from the Spoonacular API based on the current list of ingredients.
   * @async
   * @function
   * @returns {Promise<void>}
   */
  const fetchRecipes = async () => {
    const ingredientsString = ingredientsList.join(",");
    console.log("ingredientsString: " + ingredientsString);
    console.log("ingredientsList: " + ingredientsList);

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients`,
        {
          params: {
            ingredients: ingredientsString,
            number: number,
            apiKey: "f649ff29c7db47f0997943636ce3ab7d", // Consider moving this to environment variables
          },
        }
      );
      const data = response.data;
      setRecipes(data);
    } catch (error) {
      console.log("Error searching for ingredients:", error);
    }
  };

  /**
   * Manages the visibility of the confirmation message
   * displayed when a new ingredient is added. The message is shown for 2 seconds
   * before automatically hiding. Is the little green box at the bottom that appears.
   */
  useEffect(() => {
    let timeoutID;
    if (showAddedMessage) {
      timeoutID = setTimeout(() => {
        setShowAddedMessage(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutID);
    };
  }, [showAddedMessage]);

  /**
   * Triggers the `fetchRecipes` function whenever
   * the `ingredientsList` state changes, making sure that the recipe data
   * is updated based on the latest list of ingredients.
   */
  useEffect(() => {
    if (ingredientsList.length > 0) {
      fetchRecipes();
    }
  }, [ingredientsList]);

  /**
   * Handles the addition of a new ingredient to the `ingredientsList`.
   * It validates the input to prevent adding empty strings and then updates
   * the state accordingly. A confirmation message is displayed after successful addition.
   */
  const searchRecipes = () => {
    if (inputText.trim() === "") {
      return;
    }
    setIngredientsList([...ingredientsList, inputText.trim()]);
    setInputText("");
    setShowAddedMessage(true);
  };
  /*
   * Renders the HomeScreen component.
   */
  return (
    <View style={styles.homeScreenContainer}>
      {/* Search Bar Section */}
      <View style={[styles.searchBarContainer, { backgroundColor: "white" }]}>
        <View style={styles.searchBar}>
          <TextInput
            style={[styles.input, { paddingLeft: 30 }]}
            placeholder="Search ingredients"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={searchRecipes}
          />
          <Icon
            style={[styles.iconContainer, { right: 312 }]}
            name="search"
            size={20}
            color="gray"
          />
        </View>
      </View>
      {/* Render the recipes in cards */}
      <View style={styles.recipeContainer}>
        <RenderRecipes recipes={recipes} navigation = {navigation}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  searchBarContainer: {
    flex: 1,
    backgroundColor: "#FAF0E6",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 40,
    paddingLeft: 11,
  },
  searchBar: {
    position: "relative",
    width: 350,
    marginBottom: 7,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 1,
    padding: 10,
    paddingRight: 40,
  },
  iconContainer: {
    padding: 10,
    position: "absolute",
    right: 5,
  },
  recipeContainer: {
    flex: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  // confirmationContainer: {
  //   position: "absolute",
  //   bottom: 20,
  //   height: 40,
  //   width: 170,
  //   borderRadius: 10,
  //   borderColor: "#4CAF50",
  //   backgroundColor: "#2E6F40",
  //   shadowColor: "#000",
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 5,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // confirmationText: {
  //   fontSize: 18,
  //   color: "#FCFBF4",
  // },
  // come back to this later
});

export default HomeScreen;
