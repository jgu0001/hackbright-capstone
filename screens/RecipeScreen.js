import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import { getRecipeById } from "../api";
import { Colors } from ".././styles/Colors";
import Ingredients from "../components/Ingredients";
import Preparation from "../components/Preparation";
import ServingSize from "../components/ServingSize";
import CookTime from "../components/CookTime";

export default function RecipeScreen({ route }) {
  const { recipe } = route.params;
  const [fullRecipe, setFullRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await getRecipeById(recipe.id);
        setFullRecipe(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipe();
  }, []);

  if (!fullRecipe) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <ScrollView>
          <Image source={{ uri: fullRecipe.image }} style={styles.image} />
          <Text style={styles.title}>{fullRecipe.title}</Text>
          <View style={styles.info}>
            <ServingSize servings={fullRecipe.servings} />
            <CookTime readyInMinutes={fullRecipe.readyInMinutes} />
          </View>
          <Ingredients ingredients={fullRecipe.extendedIngredients} />
          <Preparation steps={fullRecipe.analyzedInstructions[0].steps} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.oatmeal,
  },
  header: {
    marginTop: 100,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.black,
    padding: 5,
  },
  info: {
    flexDirection: "row",
  },
});
