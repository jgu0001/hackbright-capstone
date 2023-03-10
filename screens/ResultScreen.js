import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, ScrollView } from "react-native";

import RecipeItem from "../components/RecipeItem";
import { Colors } from "../styles/Colors";

export default function ResultScreen({ route, navigation }) {
  const { recipes } = route.params;

  const handlePress = (recipe) => {
    navigation.navigate("Recipe", { recipe });
  };

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.screen}>
        <View style={styles.header}>
          <ScrollView>
            <View style={styles.container}>
              {recipes.map((recipe) => (
                <RecipeItem
                  key={recipe.id}
                  recipe={recipe}
                  onPress={handlePress}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.oatmeal,
  },
  header: {
    marginTop: 100,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
