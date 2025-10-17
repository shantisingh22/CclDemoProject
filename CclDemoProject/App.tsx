import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import IntroScreen from './src/components/IntroScreen.tsx';
// import WelcomeScreen from './src/screens/WelcomeScreen'; 
import UniqueCodeScreen from './src/screens/UniqueCodeScreen';
// import NextButton from './src/screens/NextButton';


export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <IntroScreen  />
    <SafeAreaProvider>
      {/* <WelcomeScreen /> */}
      <UniqueCodeScreen />
      {/* <NextButton /> */}
    </SafeAreaProvider>
  );
}

























