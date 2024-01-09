// app/App.tsx
import React from "react";
import { View } from "react-native";
import LoginComponent from "./components/LoginComponent";
import NavBar from "./components/NavBarComponent";
import HomePage from "./pages/home";
import Progresso from "./pages/progresso";

const App: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Progresso />
      <NavBar />
    </View>
  );
};

export default App;
