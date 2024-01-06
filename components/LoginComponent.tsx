// app/components/LoginComponent.tsx
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  StyleSheet,
} from "react-native";

const LoginComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/image/logo.png")} style={styles.logo} />

      {/* Campo de Email */}
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="example@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Campo de Senha */}
      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="********                                                        👁‍🗨"
        secureTextEntry
      />

      {/* Link "Esqueceu sua senha?" */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      {/* Botão de Login */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: "flex-start",
    color: "#030229",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    marginBottom: 20,
    marginTop: 20,
  },
  container: {
    flex: 2,
    padding: 10,
  },
  logo: {
    width: 243,
    height: 243,
    alignSelf: "center",
    marginTop: 60,
  },
  input: {
    height: 60,
    width: 300,
    borderWidth: 0,
    backgroundColor: "#F7F7F8",
    borderRadius: 5,
    paddingLeft: 10,
  },
  forgotPassword: {
    color: "#D0021B",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    marginTop: 4,
    alignSelf: "flex-end",
  },
  loginButton: {
    backgroundColor: "#FF9F00", // Alterado para a cor #FF9F00
    width: 251,
    height: 50,
    flexShrink: 0,
    marginTop: 31,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
    border: 0,
    marginBottom: 10,
  },

  loginButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LoginComponent;
