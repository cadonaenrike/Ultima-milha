import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permissão necessária",
          "Precisamos de sua permissão para acessar a localização"
        );
      }
    })();
  }, []);

  const handleLogin = async () => {
    // Primeiro, garantimos que temos a permissão para a localização
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão necessária",
        "Precisamos de sua permissão para acessar a localização"
      );
      return;
    }

    // Se a permissão foi concedida, procedemos com a lógica de login
    try {
      // Aqui seria sua lógica de login
      const response = { success: true }; // Substitua isso pela resposta da API

      if (response.success) {
        // Aqui você pode obter a localização atual antes de navegar
        const location = await Location.getCurrentPositionAsync({});
        console.log(location); // Faça algo com a localização antes de navegar para a próxima tela

        // Navegue para a próxima tela se tudo estiver certo
        //@ts-ignore
        navigation.navigate("Home");
      } else {
        Alert.alert("Falha no Login", "Email ou senha incorretos");
      }
    } catch (error) {
      Alert.alert("Erro de Login", "Ocorreu um erro ao tentar fazer login");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/image/logo.png")} style={styles.logo} />

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="example@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="********                                                            👁‍🗨"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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
    width: "90%",
    borderWidth: 0,
    backgroundColor: "#F7F7F8",
    borderRadius: 5,
    paddingLeft: 10,
    marginLeft: 15,
  },
  forgotPassword: {
    color: "#D0021B",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    marginTop: 4,
    marginRight: 20,
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

export default Login;
