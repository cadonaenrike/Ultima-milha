import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";

import LayoutComponent from "./components/LayoutComponent";
import Progresso from "./pages/Progresso";
import { HomePage } from "./pages/Home";
import Visitas from "./pages/Visitas";
import Notificacoes from "./pages/Notificacoes";
import Perfil from "./pages/Perfil";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          contentStyle: { padding: 10, backgroundColor: "#FFF" },
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <LayoutComponent>
              <HomePage />
            </LayoutComponent>
          )}
        </Stack.Screen>
        <Stack.Screen name="Progresso" options={{ headerShown: false }}>
          {() => (
            <LayoutComponent>
              <Progresso />
            </LayoutComponent>
          )}
        </Stack.Screen>
        <Stack.Screen name="Visitas" options={{ headerShown: false }}>
          {() => (
            <LayoutComponent>
              <Visitas />
            </LayoutComponent>
          )}
        </Stack.Screen>
        <Stack.Screen name="Notificacoes" options={{ headerShown: false }}>
          {() => (
            <LayoutComponent>
              <Notificacoes />
            </LayoutComponent>
          )}
        </Stack.Screen>
        <Stack.Screen name="Perfil" options={{ headerShown: false }}>
          {() => (
            <LayoutComponent>
              <Perfil />
            </LayoutComponent>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
