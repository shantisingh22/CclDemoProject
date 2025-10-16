import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import WelcomeScreenStyles from '../styles/WelcomeScreen';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={WelcomeScreenStyles.container}>
      <View style={WelcomeScreenStyles.top}>
        <Image
          source={require('../assets/images/logo.png')}
          style={WelcomeScreenStyles.logo}
          resizeMode="contain"
        />
        <Text style={WelcomeScreenStyles.title}>The Center for Creative Learning</Text>
        <Text style={WelcomeScreenStyles.subtitle}>IIT Gandhinagar</Text>
      </View>

      <View style={WelcomeScreenStyles.bottom}>
        <Text style={WelcomeScreenStyles.programTitle}>Curiosity Program</Text>
        <Text style={WelcomeScreenStyles.programSubtitle}>Let's Get in!</Text>
        <View style={WelcomeScreenStyles.underline}/>

        <TouchableOpacity style={WelcomeScreenStyles.registerButton}>
          <Text style={WelcomeScreenStyles.registerText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={WelcomeScreenStyles.loginButton}>
          <Text style={WelcomeScreenStyles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
