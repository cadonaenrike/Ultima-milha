import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-vector-icons/Icon";

const Perfil: React.FC = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/image/perfil.jpg")} // Caminho para a imagem de perfil
          style={styles.profileImage}
        />
        <View style={styles.headerContainerInfos}>
          <Text style={styles.headerText}>Paulo Silva</Text>
          <Text style={styles.editPhotoText}>Editar Foto</Text>
        </View>
      </View>
      {/* Lista de opções do perfil */}
      <View style={styles.containerOptions}>
        <View style={styles.option}>
          <View style={styles.iconBackground}>
            <Ionicons name="person-outline" size={25} color="#4B4B4B" />
          </View>
          <Text style={styles.optionText}>Perfil</Text>
        </View>
        {/* Sobre */}
        <View style={styles.option}>
          <View style={styles.iconBackground}>
            <Ionicons
              name="information-circle-outline"
              size={25}
              color="#4B4B4B"
            />
          </View>
          <Text style={styles.optionText}>Sobre</Text>
        </View>
        {/* Notificações */}
        <View style={styles.option}>
          <View style={styles.iconBackground}>
            <Ionicons name="notifications-outline" size={25} color="#4B4B4B" />
          </View>
          <Text style={styles.optionText}>Notificações</Text>
        </View>
        {/* Configurações */}
        <View style={styles.option}>
          <View style={styles.iconBackground}>
            <Ionicons name="settings-outline" size={25} color="#4B4B4B" />
          </View>
          <Text style={styles.optionText}>Configurações</Text>
        </View>
        {/* Ajuda e Suporte */}
        <View style={styles.option}>
          <View style={styles.iconBackground}>
            <Ionicons name="help-circle-outline" size={25} color="#4B4B4B" />
          </View>
          <Text style={styles.optionText}>Ajuda e Suporte</Text>
        </View>
        {/* Sair do aplicativo */}
        <View style={styles.option}>
          <View style={styles.iconBackground}>
            <Ionicons name="exit-outline" size={25} color="#4B4B4B" />
          </View>
          <Text style={styles.optionText}>Sair do aplicativo</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerContainer: {
    height: 170,
    backgroundColor: "#FF9F00",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    marginTop: -11,
    marginHorizontal: -11,
    gap: 20,
    borderRadius: 28,
  },
  headerContainerInfos: {
    alignSelf: "center",
  },
  profileImage: {
    marginLeft: 25,
    width: 64.636,
    height: 63.727,
    borderRadius: 63.636 / 2,
    borderColor: "#FFFFFF",
    borderWidth: 2,
  },
  headerText: {
    color: "#4B4B4B",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  editPhotoText: {
    color: "#4B4B4B",
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 0.3,
    textDecorationLine: "underline",
  },
  containerOptions: {
    paddingLeft: 22,
    paddingTop: 52,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#DDD",
    alignItems: "center",
    justifyContent: "center",
  },
  optionText: {
    color: "#4B4B4B",
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.36,
    marginLeft: 16, // Espaçamento entre o ícone e o texto
  },
  // ... outros estilos que você possa precisar
});

export default Perfil;
