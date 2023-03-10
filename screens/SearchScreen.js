import { useState, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { searchRecipesByIngredients } from "../api";
import CustomButton from "../components/CustomButton";
import { Colors } from "../styles/Colors";
import FoodJoke from "../components/FoodJoke";

export default function SearchScreen({ navigation }) {
  const [ingredients, setIngredients] = useState("");

  const handleSearch = async () => {
    try {
      const response = await searchRecipesByIngredients(ingredients);
      navigation.navigate("Results", { recipes: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const clearSearch = navigation.addListener("blur", () => {
      setIngredients("");
    });

    return clearSearch;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TextInput
        value={ingredients}
        onChangeText={(text) => setIngredients(text)}
        placeholder="Enter pantry ingredient(s) separated by commas"
        style={styles.input}
      />
      <View>
        <CustomButton onPress={handleSearch}>Search</CustomButton>
      </View>
      <FoodJoke />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.brightPurple,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.oatmeal,
    backgroundColor: Colors.oatmeal,
    borderRadius: 5,
    padding: 10,
    width: "90%",
    marginBottom: 20,
  },
});
