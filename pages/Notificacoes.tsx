import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Notificacoes: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.notification}>
        <Text style={styles.notificationText}>
          Pedido chegou na{" "}
          <Text style={styles.notificationTextBold}>loja 01</Text>
        </Text>
      </View>
      <View style={styles.notification}>
        <Text style={styles.notificationText}>
          Atenção na sua{" "}
          <Text style={styles.notificationTextBold}>loja 02</Text>
        </Text>
      </View>
      <View style={styles.notification}>
        <Text style={styles.notificationText}>
          Mensagem do supervisor{" "}
          <Text style={styles.notificationTextBold}>visualizada</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 60,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  notification: {
    width: 350,
    height: 69,
    borderRadius: 4,
    borderColor: "#F6945D",
    borderLeftWidth: 6,
    backgroundColor: "#FFEFE7",
    justifyContent: "center",
    padding: 10,
    marginBottom: 10, // Espaçamento entre as notificações
  },
  notificationText: {
    color: "#000",
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
  },
  notificationTextBold: {
    color: "#000",
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "700",
  },
});

export default Notificacoes;
