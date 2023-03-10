import { View, Text, StyleSheet, ImageBackground } from "react-native";

import CustomButton from "../components/CustomButton";
import { Colors } from "../styles/Colors";

export default function LandingScreen({ navigation }) {
  const landingImg = require("../assets/images/pantry-pardner-landing.png");

  return (
    <ImageBackground source={landingImg} style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to PantryPardner!</Text>
        <View style={styles.button}>
          <CustomButton onPress={() => navigation.navigate("Search")}>
            Find Recipes
          </CustomButton>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 2,
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.oatmeal,
    marginTop: 120,
  },
  button: {
    flex: 2,
    marginTop: 100,
  },
});
