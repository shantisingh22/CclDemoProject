import React from "react";
import {View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/Intro";
import { SafeAreaView } from "react-native-safe-area-context";



const IntroScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <Pressable style={{ flex: 1 }} onPress={() => navigation.navigate("WelcomeScreen")}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.center}>
          <Image source={require("../assets/images/logo.png")} style={styles.logo} />
          <Text style={styles.brandTop}>The Center for Creative Learning</Text>
          <Text style={styles.brandBottom}>IIT Gandhinagar</Text>
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

export default IntroScreen;

