// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import OutlineButton from './src/screens/OutlineButton'; 

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <View style={styles.container}>
//         <OutlineButton title="Register" />
//         <OutlineButton title="Login" style={{ marginTop: 12 }} />
//       </View>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff', padding: 24, justifyContent: 'center' },
// });




import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WelcomeScreen from './src/screens/WelcomeScreen'; 

export default function App() {
  return (
    <SafeAreaProvider>
      <WelcomeScreen />
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
