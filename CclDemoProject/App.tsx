import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "./src/screens/IntroScreen";
import { View, Text } from "react-native";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import RegSuccess from "./src/screens/RegSuccess";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="IntroScreen"
      >
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="RegSuccess" component={RegSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




