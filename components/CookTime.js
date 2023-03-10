import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../styles/Colors";

export default function CookTime({ readyInMinutes }) {
  const hours = Math.floor(readyInMinutes / 60);
  const minutes = readyInMinutes % 60;
  const time = hours > 0 ? `${hours}h ${minutes}m` : `${minutes} minutes`;

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Est. Time: </Text>
      <Text style={styles.time}>{time}</Text>
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
  time: {
    fontWeight: "bold",
    marginVertical: 5,
  },
});
