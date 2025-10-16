// import React from 'react';
// import { View, Text } from 'react-native';
// import styles from '../styles/OutlineButton';

// export default function OutlineButton() {
//   return (
//     <View style={styles.button}>
//       <Text style={styles.label}>Button</Text>
//     </View>
//   );
// }



import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import styles from '../styles/OutlineButton';

type Props = {
  title?: string;
  style?: StyleProp<ViewStyle>; 
};

export default function OutlineButton({ title = 'Button', style }: Props) {
  return (
    <View style={[styles.button, style]}>
      <Text style={styles.label}>{title}</Text>
    </View>
  );
}
