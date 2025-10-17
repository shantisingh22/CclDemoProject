// src/styles/sessionDetail.styles.ts
import { StyleSheet } from 'react-native';

export const COLORS = {
  bgColor: '#E9EEF1',
  bgSoft: 'White',
  text: '#1B1C1E',
  subText: '#6C7177',
  cardBg: '#FFFFFF',
  divider: '#D8DEE4',
  primary: '#2F7CF6',
  joinBlue: '#37A9FF',
  paddingHorizontal: 20,
};

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.bgColor },
  headerContaner: {
    paddingHorizontal: COLORS.paddingHorizontal,
    paddingTop: 15,
    paddingBottom: 12,
    backgroundColor: COLORS.bgColor,
  },
  backArrow: { fontSize: 30, color: COLORS.text },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 6,
    marginTop: 10,
  },
  tabsRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  tab: { fontSize: 13, letterSpacing: 1, color: 'black' },
  tabDivider: { color: COLORS.text, marginHorizontal: 1 },
  bodyContainer: {
    backgroundColor: 'white',
    paddingHorizontal: COLORS.paddingHorizontal,
    paddingTop: 28,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: 'black',
    marginTop: 10,
    marginBottom: 8,
    paddingHorizontal: 15,
  },
  
  deviceCard: {
    fontSize: 19,
    fontWeight: '600',
    color: 'black',
    marginTop: 10,
    marginBottom: 8,
  },

  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 12,
    padding: 25,
    shadowColor: 'black',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    borderWidth: 1,
    borderColor: '#EDF1F4',
    margin: 5,
    marginBottom: 60,
  },

  hindiQuestion: {
    fontFamily: 'NotoSansDevanagari-Regular',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1,
    paddingBottom: 10,
    lineHeight: 29,
  },
  hindiAns: {
    fontSize: 16,
    lineHeight: 29,
    color: COLORS.text,
    marginBottom: 8,
  },
  bold: { fontWeight: '700' },

  materialScreen: { flex: 1, backgroundColor: '#f5f5f5' },
  contentContainerStyle: { padding: 16 },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },
  bulletList: { marginVertical: 12 },
  materialImage: {
    width: '100%',
    height: 220,
    marginTop: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  bulletText: {
    fontSize: 15,
    lineHeight: 24,
    color: COLORS.text,
    flexShrink: 1,
  },

  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    paddingHorizontal: 18,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#111827',
    marginTop: 8,
    marginRight: 15,
  },
  item: { flex: 1, fontSize: 15, lineHeight: 29, color: '#1f2937' },

  imageWrap: {
    marginTop: 12,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#eef1f6',
  },
  image: { width: '100%', height: 180 },

  bulletRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.subText,
    marginTop: 8,
  },

  bottomBarWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 12,
    paddingHorizontal: 16,
    backgroundColor: '#0EA5E9',
  },
  bottomBar: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  datePill: {
    width: 64,
    height: 64,
    borderRadius: 14,
    backgroundColor: '#2B82FF12',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateBig: {
    fontSize: 22,
    fontWeight: '800',
    color: "white",
    lineHeight: 26,
  },
  dateSmall: { fontSize: 12, color:"white" },
  sessionInfo: { flex: 1 },
  sessionLabel: { fontSize: 12, color:"white", marginBottom: 2 },
  sessionWhen: { fontSize: 16, fontWeight: '700', color:"white" },
  joinBtn: {
    backgroundColor: "white",
    paddingHorizontal: 22,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
      color: '#0B5AAE',
  },
  joinText: { color: '#0EA5E9', fontWeight: '800', letterSpacing: 0.5 },

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 30,
  },

  deviceCardmuted: { color: 'black', fontSize: 15 },
  muted: { color: 'black', fontSize: 13, fontWeight: 500 },
  linkInput: {
    flex: 1,
    height: 44,
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: '#E6F3FF',
    color: '#0B5AAE',
    fontWeight: '700',
  },

  deviceLink: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    paddingTop: 20,
  },

  linkRow: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
    paddingHorizontal: 14,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#0B5AAE',
  },

  BtnText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 17,
    marginRight: 8, 
    flex: 1,
  },

  copyIcon: {
    fontSize: 18,
    color: '#0B5AAE',
  },
  iconImg: {
    width: 18,
    height: 18,
    marginLeft: 6,
    resizeMode: 'contain',
  },

  copyBtn: {
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6F3FF',
  },

  pinRow: {
    flexDirection: 'row', 
    alignItems: 'center',
    gap: 8,
    flexShrink: 1,
  },

  pinBox: {
    width: 30,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#1B1C1E',
    backgroundColor: '#fff',
  },

  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  actionText: { fontSize: 15, fontWeight: '700', color: COLORS.text },
  spacer: { flex: 1 },
  arrow: { fontSize: 18, color: 'black' },

  taskText: { fontSize: 14, color: 'black', marginBottom: 12 },
  divider: { height: 1, backgroundColor: 'black', marginVertical: 10 },

  taskRow: { flexDirection: 'row', alignItems: 'center' },
  taskLabel: { fontSize: 15, color: COLORS.text, fontWeight: '600' },
  ctaCircle: {
    marginLeft: 'auto',
    width: 48,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#0EA5E9',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  ctaArrow: { color: '#fff', fontSize: 18, fontWeight: '700' },

  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F6FA',
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.bgColor,
    gap: 2,
    marginBottom: 5,
  },

  label: { fontSize: 13, paddingHorizontal: 5 },
  datePill2: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: '#2B82FF15',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
