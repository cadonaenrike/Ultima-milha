import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/Ionicons";

const HomePage: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/image/logo.png")} style={styles.logo} />

      {/* Saudação */}
      <View style={styles.visitsMessageContainer}>
        <Text style={styles.visitsMessage}>Olá promotor João</Text>
      </View>

      {/* Carrossel de 3 imagens */}
      <Swiper
        style={styles.swiper}
        showsButtons={false}
        loop={true}
        paginationStyle={styles.pagination}
        dotColor={"#D9D9D9"} // Cor dos pontos inativos
        activeDotColor={"#FF7A00"} // Cor dos pontos ativos
      >
        <Image
          source={require("../assets/image/carrosel.png")}
          style={styles.carouselImage}
        />
        <Image
          source={require("../assets/image/carrosel.png")}
          style={styles.carouselImage}
        />
        <Image
          source={require("../assets/image/carrosel.png")}
          style={styles.carouselImage}
        />
      </Swiper>

      {/* Mensagem abaixo do carrossel */}
      <View style={styles.visitsMessageContainer2}>
        <Text style={styles.visitsMessage2}>Suas visitas de hoje</Text>
      </View>

      {/* Botões grandes em formato de retângulo */}
      <View style={styles.buttonsContainer}>
        {[1, 2, 3, 4].map((index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={toggleModal}
          >
            <Text style={styles.buttonHeaderText}>Loja {index}</Text>
            <Text style={styles.buttonSubText}>Supermercado X</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Loja 00</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalSubtitle}>Supermercado X</Text>
            <TouchableOpacity style={styles.modalButtonEndereco}>
              <Text style={styles.modalButtonText}>Ver endereço</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Fazer check-in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    width: "80%",
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  modalSubtitle: {
    marginVertical: 10,
    alignSelf: "flex-start",
  },
  modalButton: {
    backgroundColor: "#FFA500",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  modalButtonEndereco: {
    backgroundColor: "#FFF;",
    borderWidth: 2,
    borderColor: "#FFA500",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  logo: {
    width: 118,
    height: 105,
    marginTop: 16,
    marginBottom: 0,
  },
  greetingContainer: {
    display: "flex",
    width: 220,
    height: 37,
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  greeting: {
    color: "#000",
    fontFamily: "Roboto",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "500",
  },
  swiper: {
    height: 200,
    width: "100%",
    marginBottom: 15, // Mantenha como está para o espaço abaixo do carrossel
  },
  carouselImage: {
    width: "80%",

    alignSelf: "center",
    height: 136,
    borderRadius: 4,
  },
  pagination: {
    position: "absolute",
    bottom: -20, // Ajustado para mover os pontos para 15px abaixo das imagens do carrossel
  },

  visitsMessageContainer: {
    display: "flex",
    width: 220,
    height: 37,
    marginTop: 0,
    marginBottom: 25,
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  visitsMessageContainer2: {
    display: "flex",
    width: 220,
    height: 37,
    marginTop: 30,
    marginBottom: 10,
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  visitsMessage: {
    marginTop: 10,
    color: "#000",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "500",
  },
  visitsMessage2: {
    color: "#000",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "500",
  },
  buttonsContainer: {
    flexDirection: "column",
    gap: 14,
    borderRadius: 4,
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    width: 264.946,
    height: 68.958,
    flexShrink: 0,
    borderRadius: 4,
    backgroundColor: "rgba(83, 175, 170, 0.28)",
    justifyContent: "center",
    paddingLeft: 9.75,
    borderLeftWidth: 3,
    borderColor: "#2A9D8F",
    alignItems: "flex-start",
  },
  buttonHeaderText: {
    color: "#000",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",

    marginBottom: 5,
  },
  buttonSubText: {
    color: "#000",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "300",
  },
});

export default HomePage;
