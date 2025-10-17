import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
export const color = {
  bgColor: '#E9EEF1',
  text:'#1B1C1E',
  subText: '#6C7177',

};

type styles = {
  container: ViewStyle;
  title: TextStyle;
};

export const styles = StyleSheet.create({
  safe:{flex: 1,borderColor:color.bgColor},
  header: { paddingHorizontal: 18, paddingTop:10,paddingBottom:8,backgroundColor: color.bgColor },
  text: { color: "black" },
  tabRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 10 },
  title:{ fontSize: 28, fontWeight: '700', color: color.text, marginBottom: 10 },
  tab: { fontSize: 12, color: color.subText },
  tabDivider: { color: color.subText },
  
});
