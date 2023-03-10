import { View, Text, StyleSheet } from "react-native";

export default function Preparation({ steps }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Preparation</Text>
      {steps.map((step) => (
        <View key={step.number} style={styles.step}>
          <Text style={styles.stepNumber}>Step {step.number}</Text>
          <Text style={styles.stepText}>{step.step}</Text>
        </View>
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
  step: {
    marginBottom: 10,
  },
  stepNumber: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  stepText: {
    flex: 1,
    fontSize: 16,
  },
});
