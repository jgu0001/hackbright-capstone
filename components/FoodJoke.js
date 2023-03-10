import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { randomFoodJoke } from "../api";
import { Colors } from "../styles/Colors";
import CustomButton from "./CustomButton";

export default function FoodJoke() {
  const [joke, setJoke] = useState("");

  const handleGetJoke = async () => {
    try {
      let jokeText = "";
      while (jokeText.length > 140 || jokeText.length === 0) {
        const response = await randomFoodJoke();
        jokeText = response.data.text;
      }
      setJoke(jokeText);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetJoke();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.joke}>{joke}</Text>
      <CustomButton onPress={handleGetJoke}>Make Me Laugh</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.shiptPurple,
    borderRadius: 20,
    padding: 20,
  },
  joke: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: Colors.oatmeal,
  },
});
