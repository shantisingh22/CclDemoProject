import React from 'react';
import { StyleSheet, useColorScheme, Text, View } from 'react-native';

const App: React.FC = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const backgroundColor = isDarkMode ? "black" : "white"
  const textColor = isDarkMode?"white":"black"
  
  return (
    <View style={[styles.container,{backgroundColor:backgroundColor}]}>
      <Text style={[styles.text, {color:textColor}]}>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 500,
    fontWeight: 600,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});



// //  Image and button, Text and view exercise, alerts,

// import React from 'react';
// import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
// import { Registration } from './src/components/Registration';
// import { View, Text, Image } from 'react-native';
// // import { Button } from 'react-native';

// const App: React.FC = () => {
//   return (
//     <View style={{ width: 100, height: 50, backgroundColor: 'red' }}>
//       <Text> </Text>
//       <Image
//         style={{ width: 200, height: 300 }}
//         source={{ uri: 'https://images.unsplash.com/photo-...' }}
//       />
//       {/* <Button title="Click"></Button>   // Basic ui comes with || Cant constmise in css to much || Tittle need to use for Wtite anything inside button */}

//       {/* // 2th button  */}

//       {/* <TouchableOpacity style={{backgroundColor:"green",height:30}} onPress={()=> Alert.alert("clickeddd")}>
//         <Text style={{color:"while"}}>i am 2th btn type</Text>
//       </TouchableOpacity> */}

//       {/* pressable */}

//        <Registration />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

// export default App;
