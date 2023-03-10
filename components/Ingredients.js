import { View, Text, StyleSheet } from "react-native";

export default function Ingredients({ ingredients }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Ingredients</Text>
      {ingredients.map((ingredient, index) => (
        <Text key={`ingredient-${index}`} style={styles.ingredient}>
          {ingredient.original}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ingredient: {
    marginBottom: 5,
  },
});
