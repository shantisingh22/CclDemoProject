import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import createStyles from '../styles/RegisterSuccessScreen';

const RegisterSuccessScreen: React.FC = () => {
  const styles = createStyles();

  return (
    <SafeAreaView style={styles.screenBox}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.imageContainer}>
          <Image
             source={require('../assets/images/image.png')}
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
            <Text style={styles.CheckButtonBoxText}>
              Check Sessions <Text style={styles.CheckButtonBoxArrow}>→</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegisterSuccessScreen;



