import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { PieChart, BarChart } from "react-native-gifted-charts";

interface PieChartData {
  value: number;
  color: string;
}

interface LegendData {
  text: string;
  color: string;
}

interface BarData {
  value: number;
  label: string;
  frontColor?: string;
}

const Progresso = () => {
  const [pieChartData, setPieChartData] = useState<Array<PieChartData>>([]);
  const [legendData, setLegendData] = useState<Array<LegendData>>([]);
  const [barData, setBarData] = useState<Array<BarData>>([]);

  useEffect(() => {
    // Simulando o carregamento de dados da API
    const fetchChartData = async () => {
      // Substitua os dados abaixo pelos dados da sua API
      const pieDataFromAPI = [
        { value: 0.5, color: "#FFFFFF" },
        { value: 32, color: "#FFA15B" },
        { value: 0.5, color: "#FFFFFF" },
        { value: 32, color: "#6665DD" },
        { value: 0.5, color: "#FFFFFF" },
        { value: 27.5, color: "#34D1BF" },
      ];

      const legendDataFromAPI = [
        { text: "PRODUTOS", color: "#FFA15B" },
        { text: "02", color: "#6665DD" },
        { text: "03", color: "#34D1BF" },
      ];

      const barDataFromAPI = [
        { value: 250, label: "M" },
        { value: 500, label: "T", frontColor: "#177AD5" },
        { value: 745, label: "W", frontColor: "#177AD5" },
        { value: 320, label: "T" },
        { value: 600, label: "F", frontColor: "#177AD5" },
        { value: 256, label: "S" },
        { value: 300, label: "S" },
      ];

      setPieChartData(pieDataFromAPI);
      setLegendData(legendDataFromAPI);
      setBarData(barDataFromAPI);
    };

    fetchChartData();
  }, []);

  const renderLegend = (item: LegendData, index: number) => {
    return (
      <View
        style={[styles.legendItem, { backgroundColor: item.color }]}
        key={index}
      >
        <Text style={styles.legendText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.containerPai}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Produtos mais vendidos</Text>
        <PieChart
          data={pieChartData}
          donut
          radius={100}
          innerRadius={70}
          textColor={"#414D55"}
          textSize={15}
          fontWeight={"700"}
          centerLabelComponent={() => (
            <View>
              <Text style={styles.centerNumber}>3986</Text>
              <Text style={styles.centerLabel}>PRODUTOS</Text>
            </View>
          )}
        />
        <View style={styles.legendContainer}>
          {legendData.map((item, index) => renderLegend(item, index))}
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.salesSection}>
          <TouchableOpacity style={styles.arrowButton}>
            <Icon name="arrow-back" size={20} color="#121212" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Vendas total</Text>
          <TouchableOpacity style={styles.arrowButton}>
            <Icon name="arrow-forward" size={20} color="#121212" />
          </TouchableOpacity>
        </View>
        <BarChart
          height={90}
          barWidth={8}
          noOfSections={1}
          barBorderRadius={2}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerPai: {
    flex: 1,
    marginVertical: 55,
  },
  container: {
    margin: 6,
    width: "90%",
    alignSelf: "center",
    borderRadius: 16,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#6E6E6E",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    padding: 20,
  },
  salesSection: {
    flexDirection: "row",
    marginVertical: 28,
  },
  arrowButton: {
    paddingHorizontal: 30,
  },
  headerText: {
    color: "#414D55",
    fontSize: 19,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: 0.01,
    textAlign: "center",
    marginBottom: 20,
  },
  centerNumber: {
    color: "#414D55",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
  centerLabel: {
    color: "#696D6E",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.417,
    textTransform: "uppercase",
    textAlign: "center",
  },
  legendContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginLeft: 10,
    marginTop: 15,
  },
  legendItem: {
    height: 20,
    flexShrink: 0,
    borderRadius: 4,
    marginRight: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  legendText: {
    fontSize: 9,
    color: "white",
  },
});

export default Progresso;
