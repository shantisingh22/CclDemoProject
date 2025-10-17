
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "./src/screens/IntroScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SelectSchool from "./src/screens/SelectSchool";
import UniqueCodeScreen from "./src/screens/UniqueCodeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Intro">
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SelectSchool" component={SelectSchool} />
        <Stack.Screen name="UniqueCodeScreen" component={UniqueCodeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}





















// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import OutlineButton from './src/screens/OutlineButton';

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <View style={styles.container}>
//         <OutlineButton />
//       </View>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 24,
//     justifyContent: 'center',
//   },
// });
