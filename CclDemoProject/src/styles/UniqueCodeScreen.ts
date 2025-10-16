// import { StyleSheet } from 'react-native';

// const UniqueCodeScreen = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     backgroundColor: '#d9e6f6',
//   },
//   header: {
//     paddingTop: 18,
//     paddingBottom: 16,
//     backgroundColor: '#d9e6f6',
//   },
//   headerRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 18,
//   },
//   logo: {
//     width: 34,
//     height: 34,
//     borderRadius: 17,
//     backgroundColor: 'rgba(255,255,255,0.25)',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#000',
//   },
//   headerSub: {
//     fontSize: 14,
//     color: '#555',
//   },

//   sheet: {
//     flex: 1,
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 24,
//     borderTopRightRadius: 24,
//     paddingHorizontal: 20,
//     paddingTop: 12,
//   },

//   back: {
//     fontSize: 26,
//     color: '#333',
//     marginTop: 6,
//   },
//   pageTitle: {
//     fontSize: 28,
//     fontWeight: '700',
//     marginTop: 8,
//     color: '#000',
//   },

//   banner: {
//     marginTop: 14,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f2f7fb',
//     borderRadius: 12,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//   },
//   bannerIcon: {
//     width: 28,
//     height: 28,
//     borderRadius: 14,
//     backgroundColor: '#e4eef7',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 8,
//   },
//   bannerText: {
//     flex: 1,
//     color: '#3b3b3b',
//     fontSize: 14,
//   },
//   bannerArrow: {
//     color: '#1098d6',
//     fontSize: 16,
//     marginLeft: 8,
//   },

//   fieldLabel: {
//     marginTop: 22,
//     marginBottom: 8,
//     color: '#4b4b4b',
//     fontSize: 14,
//   },

//   otpRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   otpBox: {
//     width: 40,
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 3,
//   },

//   primaryBtn: {
//     backgroundColor: '#1098d6',
//     borderRadius: 10,
//     paddingVertical: 14,
//     paddingHorizontal: 50,
//     alignSelf: 'flex-start',
//     marginTop: 20,
//   },
//   primaryBtnText: {
//     color: '#fff',
//     fontWeight: '700',
//     fontSize: 16,
//   },
// });

// export default UniqueCodeScreen;






import { StyleSheet } from 'react-native';
import { CustomStyle } from './CustomStyle';

const UniqueCodeScreen = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: CustomStyle.primary, 
  },
  header: {
    paddingTop: 18,
    paddingBottom: 16,
    backgroundColor: CustomStyle.primary,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: CustomStyle.padding,
  },
  logo: {
    width: 34,
    height: 34,
    borderRadius: CustomStyle.radius,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  headerTitle: {
    fontSize: CustomStyle.font + 4,
    fontWeight: '700',
    color: CustomStyle.white,
  },
  headerSub: {
    fontSize: CustomStyle.font,
    color: CustomStyle.white,
  },

  sheet: {
    flex: 1,
    backgroundColor: CustomStyle.white,
    borderTopLeftRadius: CustomStyle.radius,
    borderTopRightRadius: CustomStyle.radius,
    paddingHorizontal: CustomStyle.padding,
    paddingTop: CustomStyle.padding / 2,
  },

  back: {
    fontSize: 26,
    color: '#333',
    marginTop: 6,
  },
  pageTitle: {
    fontSize: CustomStyle.font + 10,
    fontWeight: '700',
    marginTop: 8,
    color: '#000',
  },

  banner: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f7fb',
    borderRadius: CustomStyle.radius,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  bannerIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#e4eef7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  bannerText: {
    flex: 1,
    color: '#3b3b3b',
    fontSize: CustomStyle.font,
  },
  bannerArrow: {
    color: CustomStyle.primary,
    fontSize: 16,
    marginLeft: 8,
  },

  fieldLabel: {
    marginTop: 22,
    marginBottom: 8,
    color: '#4b4b4b',
    fontSize: CustomStyle.font,
  },

  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpBox: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: CustomStyle.radius / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
  },

  primaryBtn: {
    backgroundColor: CustomStyle.primary,
    borderRadius: CustomStyle.radius,
    paddingVertical: 14,
    paddingHorizontal: 50,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  primaryBtnText: {
    color: CustomStyle.white,
    fontWeight: '700',
    fontSize: CustomStyle.font,
  },
});

export default UniqueCodeScreen;

