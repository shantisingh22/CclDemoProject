
import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import styles from "../styles/Intro"; 

const IntroScreen: React.FC = () => (
  <SafeAreaView style={styles.safe}>
    <View style={styles.center}>
      <Image
        source={require("../assets/images/iitlogo.png")}  
        style={styles.logo}
      />
      <Text style={styles.brandTop}>The Center for Creative Learning</Text>
      <Text style={styles.brandBottom}>IIT Gandhinagar</Text>
    </View>
  </SafeAreaView>
);

export default IntroScreen;

