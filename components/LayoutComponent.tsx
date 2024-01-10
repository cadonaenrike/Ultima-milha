import React from "react";
import { View, StyleSheet } from "react-native";
import NavBar from "./NavBarComponent";

interface LayoutComponentProps {
  children: React.ReactNode;
}

const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <View style={styles.navBarContainer}>
        <NavBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
  },
  navBarContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default LayoutComponent;
