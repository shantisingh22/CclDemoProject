import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import WelcomeScreen from './src/screens/WelcomeScreen'; 
import UniqueCodeScreen from './src/screens/UniqueCodeScreen';
// import NextButton from './src/screens/NextButton';


export default function App() {
  return (
    <SafeAreaProvider>
      {/* <WelcomeScreen /> */}
      <UniqueCodeScreen />
      {/* <NextButton /> */}
    </SafeAreaProvider>
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
