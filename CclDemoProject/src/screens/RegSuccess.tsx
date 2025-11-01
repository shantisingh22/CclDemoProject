import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/RegSuccess';

const RegSuccess: React.FC = () => {
  return (
    <View style={styles.screenBox}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/check.png')}
          style={styles.imageBox}
        />
      </View>

      <View style={styles.textBlock}>
        <Text style={styles.thanksBox}>Thank you for Registering</Text>
        <Text style={styles.name}>Sunita Gaitonde</Text>
        <Text style={styles.subLine}>KGBV Sangat Guda, Bathinda, Punjab</Text>
      </View>

      <View style={styles.registrationCheckButton}>
        <TouchableOpacity style={styles.CheckButtonBox}>
          <Text style={styles.CheckButtonBoxText}>Check Sessions </Text>
          <Image
            source={require('../assets/images/thanksarrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegSuccess;
