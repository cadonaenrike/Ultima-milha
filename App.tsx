// app/App.tsx
import React from "react";
import { View } from "react-native";
import StyledComponent from "./components/StyledComponent";
import LoginComponent from "./components/LoginComponent";
import NavBar from "./components/NavBarComponent";

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LoginComponent />
      <NavBar />
    </View>
  );
};

export default App;
