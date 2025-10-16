import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Registration } from './src/components/Registration';  
import IntroScreen from './src/components/IntroScreen.tsx';

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <IntroScreen  />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
