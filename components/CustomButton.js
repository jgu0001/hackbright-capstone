import { View, Text, Pressable, StyleSheet } from "react-native";

import { Colors } from "../styles/Colors";

export default function CustomButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.shiptPurple }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    width: 200,
    borderRadius: 50,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.teal,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: Colors.oatmeal,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
