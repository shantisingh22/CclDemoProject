// import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const NextButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.textContainer}>
        <Text style={styles.buttonText}>Next</Text>
        <Image
            source={require('../assets/images/arrow_right_white.png')}
            style={styles.arrow}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1098d6',
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 170,
    height: 50, 
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginRight: 5,
  },
  arrow: {
    color: '#fff',
    width: 30,
    fontWeight: '600',
    alignSelf: 'center', 
  },
});
export default NextButton;
