import { Text, View, StatusBar, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles, color } from './test';
const Test = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor={color.bgColor} />
      <View style={styles.header}>
        <Pressable>
          <Text style={styles.text}>{'<'}</Text>
        </Pressable>
          <Text style={styles.title}>Diwali Themed</Text>

      <View style={styles.tabRow}>
        <Text style={styles.tab}>MATERIAL</Text>
        <Text style={styles.tabDivider}>|</Text>
        <Text style={styles.tab}>RECORDING</Text>
        <Text style={styles.tabDivider}>|</Text>
        <Text style={styles.tab}>TASK</Text>
      </View>
      </View>

      {/* <ScrollView></ScrollView> */}
      {/* <Text style={styles.title}>Diwali Themed</Text>

      <View style={styles.tabRow}>
        <Text style={styles.tab}>MATERIAL</Text>
        <Text style={styles.tabDivider}>|</Text>
        <Text style={styles.tab}>RECORDING</Text>
        <Text style={styles.tabDivider}>|</Text>
        <Text style={styles.tab}>TASK</Text>
      </View> */}
      
    </SafeAreaView>
  );
};

export default Test;
