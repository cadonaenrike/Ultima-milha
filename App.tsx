// app/App.tsx
import React from "react";
import { View } from "react-native";
import StyledComponent from "./components/StyledComponent";
import LoginComponent from "./components/LoginComponent";

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LoginComponent />
    </View>
  );
};

export default App;
