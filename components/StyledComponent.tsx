// app/components/StyledComponent.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StyledComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native with TypeScript!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default StyledComponent;
