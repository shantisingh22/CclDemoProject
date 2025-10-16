


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
    marginTop: 40,
    backgroundColor: CustomStyle.primary,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: CustomStyle.padding,
  },
  logo: {
    width: 35,
    height: 35,
    borderRadius: CustomStyle.radius,
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
    fontSize: 30,
    marginLeft:8,
  },

  fieldLabel: {
    marginTop: 22,
    marginBottom: 8,
    color: 'black',
    fontWeight: '600',
    fontSize: CustomStyle.font,
  },

  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpBox: {
    width: 37,
    height: 55,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: CustomStyle.radius / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
  },

  primaryBtn: {
    backgroundColor: CustomStyle.primary,
    borderRadius:10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  primaryBtnText: {
    color: CustomStyle.white,
    fontWeight: '700',
    fontSize: 20,
  },
});
export default UniqueCodeScreen;

