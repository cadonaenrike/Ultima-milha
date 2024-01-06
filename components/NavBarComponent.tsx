import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const NavBar: React.FC = () => {
  const buttons = [
    { iconName: "home-outline", text: "Home" },
    { iconName: "ios-stats-chart-outline", text: "Progresso" },
    { iconName: "ios-time-outline", text: "Visitas" },
    { iconName: "ios-notifications-outline", text: "Notificações" },
    { iconName: "ios-person-outline", text: "Perfil" },
  ];

  const renderButton = (
    button: { iconName: string; text: string },
    index: number
  ) => (
    <TouchableOpacity key={index} style={styles.button}>
      <Icon name={button.iconName} size={25} color="#000" />
      <Text style={styles.buttonText}>{button.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {buttons.map((button, index) => renderButton(button, index))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    backgroundColor: "#fff",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "400",
  },
});

export default NavBar;
