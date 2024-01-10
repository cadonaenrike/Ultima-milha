import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { Ionicons } from "@expo/vector-icons";

// Tipos para as props dos componentes
interface HeaderProps {
  onTabPress: (tabName: string) => void;
  activeTab: string;
}

interface MonthSelectorProps {
  onArrowPress: () => void;
  selectedMonth: string;
}

interface EventProps {
  time: string;
  title: string;
  description: string;
  color: string;
}

// Componente Header
const Header: React.FC<HeaderProps> = ({ onTabPress, activeTab }) => (
  <View style={styles.header}>
    <TouchableOpacity
      style={[styles.tab, activeTab === "calendario" && styles.activeTab]}
      onPress={() => onTabPress("calendario")}
    >
      <Text style={styles.tabText}>Calendário</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.tab, activeTab === "detalhes" && styles.activeTab]}
      onPress={() => onTabPress("detalhes")}
    >
      <Text style={styles.tabText}>Detalhes</Text>
    </TouchableOpacity>
  </View>
);

// Componente MonthSelector
const MonthSelector: React.FC<MonthSelectorProps> = ({
  onArrowPress,
  selectedMonth,
}) => (
  <View style={styles.monthSelector}>
    <Text style={styles.monthText}>{selectedMonth}</Text>
    <TouchableOpacity onPress={onArrowPress}>
      <Ionicons name="ios-arrow-down" size={20} color="black" />
    </TouchableOpacity>
  </View>
);

function darkenRGB(r: number, g: number, b: number, amount: number) {
  // Garante que o valor de amount esteja entre 0 e 1
  amount = Math.max(0, Math.min(1, amount));
  // Calcula os novos valores de RGB
  const newR = Math.round(r * (1 - amount));
  const newG = Math.round(g * (1 - amount));
  const newB = Math.round(b * (1 - amount));
  return `rgb(${newR}, ${newG}, ${newB})`;
}

// Componente Event
const Event: React.FC<EventProps> = ({ time, title, description, color }) => {
  // Suponha que 'color' é uma string no formato 'rgb(255, 200, 200)'
  //@ts-ignore
  const rgb = color.match(/\d+/g).map(Number); // Extrai os números [255, 200, 200]

  // A função darkenRGB será chamada com os valores RGB e a quantidade para escurecer
  const darkerBorderColor = darkenRGB(rgb[0], rgb[1], rgb[2], 0.2); // Escurece a cor em 20%

  return (
    <View style={styles.event}>
      <View style={styles.containerTimer}>
        <Text style={styles.eventTime}>{time}</Text>
        <View style={[styles.timeLine, { backgroundColor: color }]} />
      </View>
      <View
        style={[
          styles.eventDetail,
          {
            backgroundColor: color,
            borderColor: darkerBorderColor, // Cor da borda escurecida
          },
        ]}
      >
        <Text style={styles.eventTitle}>{title}</Text>
        <Text style={styles.eventDescription}>{description}</Text>
      </View>
    </View>
  );
};
// Componente Visitas
const Visitas = () => {
  const [activeTab, setActiveTab] = useState("calendario");
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  // Função para abrir o calendário
  const handleArrowPress = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  // Função para lidar com a mudança de mês no calendário
  const onMonthChange = (month: any) => {
    setSelectedDate(month);
    setCalendarVisible(false);
  };

  // Função para calcular os dias do mês com base no mês e ano selecionados
  const getDaysOfMonth = (year: number, month: number) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    return Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const date = new Date(year, month - 1, day);
      const dayOfWeek = weekdays[date.getDay()];
      return { day, dayOfWeek };
    });
  };

  // Lista de nomes de meses
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  // Dias do mês selecionado
  const daysOfMonth = getDaysOfMonth(selectedDate.year, selectedDate.month);
  const renderContent = () => {
    switch (activeTab) {
      case "detalhes":
        return (
          <View style={styles.detailsTab}>
            {/* Conteúdo da aba Detalhes */}
            <Text>Detalhes do evento</Text>
          </View>
        );
      case "calendario":
      default:
        return (
          <ScrollView style={styles.containerCalendario}>
            <TouchableOpacity onPress={handleArrowPress}>
              <MonthSelector
                onArrowPress={handleArrowPress}
                selectedMonth={monthNames[selectedDate.month - 1]}
              />
            </TouchableOpacity>
            <Modal
              transparent={true}
              visible={isCalendarVisible}
              onRequestClose={() => setCalendarVisible(false)}
            >
              <View style={styles.modalContainer}>
                <Calendar onMonthChange={onMonthChange} />
              </View>
            </Modal>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.weekDaysRow}
            >
              {daysOfMonth.map(({ day, dayOfWeek }) => (
                <View style={styles.dayContainer} key={day}>
                  <Text style={styles.dayText}>{dayOfWeek.toUpperCase()}</Text>
                  <Text style={styles.dayText}>{day}</Text>
                </View>
              ))}
            </ScrollView>
            <Event
              time="08:00 am"
              title="Loja 00"
              description="Supermercado X"
              color="rgba(83, 175, 170, 0.28)"
            />
            <Event
              time="09:45 am"
              title="Loja 00"
              description="Supermercado X"
              color="rgba(255, 239, 231, 1)"
            />
            <Event
              time="10:50 am"
              title=""
              description=""
              color="rgba(226, 52, 36, 0.23)"
            />
            <Event
              time="02:40 pm"
              title="Loja 00"
              description="Supermercado X"
              color="rgba(142, 0, 139, 0.13)"
            />
            <Event
              time="09:45 am"
              title="Loja 00"
              description="Supermercado X"
              color="rgba(0, 115, 204, 0.22)"
            />
            {/* Mais eventos podem ser adicionados aqui */}
          </ScrollView>
        );
    }
  };
  // Renderização do componente
  return (
    <ScrollView style={styles.container}>
      <Header onTabPress={setActiveTab} activeTab={activeTab} />
      {renderContent()}
    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    padding: 20.5,
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
  },
  containerCalendario: {
    padding: 10,
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#ffffff",
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#FF9F00",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  monthSelector: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
  },
  monthText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
  },
  weekDaysRow: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
  },
  dayContainer: {
    width: 36,
    height: 65,
    borderRadius: 18,
    backgroundColor: "#FF9F00",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    shadowColor: "rgba(0, 115, 204, 0.26)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 4, // Para Android
  },
  dayText: {
    fontWeight: "bold",
    color: "#000",
  },
  event: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  containerTimer: {
    alignItems: "center",
  },
  timeLine: {
    width: 2,
    height: 72,
    borderRadius: 8,
    marginRight: 10,
  },
  eventTime: {
    width: 65,
    height: 15,
    color: "#454545",
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    marginRight: 16,
  },
  eventDetail: {
    borderLeftWidth: 8,
    flex: 1,
    padding: 10,
    justifyContent: "center",
    backgroundColor: `rgba(83, 175, 170, 0.28)`,
    borderRadius: 4,
  },
  eventTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  eventDescription: {
    color: "#555", // Cor cinza para a descrição, ajuste conforme necessário
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  detailsTab: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Visitas;
