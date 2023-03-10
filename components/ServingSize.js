import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../styles/Colors";

export default function ServingSize({ servings }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Yield: </Text>
      <Text style={styles.servings}>{servings} servings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.teal,
  },
  servings: {
    fontWeight: "bold",
    marginVertical: 5,
  },
});
