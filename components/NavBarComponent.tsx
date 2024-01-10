import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
interface Button {
  iconName: string;
  text: string;
  screen: string;
}

const NavBar: React.FC = () => {
  const navigation = useNavigation();

  const buttons = [
    { iconName: "home-outline", text: "Home", screen: "Home" },
    {
      iconName: "ios-stats-chart-outline",
      text: "Progresso",
      screen: "Progresso",
    },
    { iconName: "ios-time-outline", text: "Visitas", screen: "Visitas" },
    {
      iconName: "ios-notifications-outline",
      text: "Notificações",
      screen: "Notificacoes",
    },
    { iconName: "ios-person-outline", text: "Perfil", screen: "Perfil" },
  ];

  const renderButton = (button: Button, index: number) => (
    <TouchableOpacity
      key={index}
      style={styles.button}
      //@ts-ignore
      onPress={() => navigation.navigate(button.screen)}
    >
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
    height: 60,
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
