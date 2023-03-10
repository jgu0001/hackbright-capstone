import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function RecipeItem({ recipe, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(recipe)}>
      <View style={styles.recipe}>
        <Image source={{ uri: recipe.image }} style={styles.image} />
        <Text style={styles.title}>{recipe.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  recipe: {
    alignItems: "center",
    margin: 10,
    width: 170,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});
