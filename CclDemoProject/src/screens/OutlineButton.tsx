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
