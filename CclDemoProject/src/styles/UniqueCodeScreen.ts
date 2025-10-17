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
  logo1: {
    width: 58,
    height: 58,
    marginLeft:30,
    borderRadius: 50,
  },
  headerTitle: {
    fontSize: CustomStyle.font + 4,
    color: CustomStyle.white,
  },
  headerSub: {
    fontSize: 12,
    color: CustomStyle.white,
  },
   headerSub1: {
    fontSize: 10,
    color: CustomStyle.white,
  },

  sheet: {
    flex: 1,
    backgroundColor: CustomStyle.white,
    borderTopLeftRadius: CustomStyle.radius,
    borderTopRightRadius: CustomStyle.radius,
    paddingHorizontal: CustomStyle.padding,
    paddingTop: CustomStyle.padding / 2,
    marginTop:10,
  },

  uniquetext:{ 
    flexDirection: 'row', 
    alignItems: 'center', 
    width:250,
    marginTop:30,
},

logoBox: {
    width: 20,
    height: 20,
  },
  back: {
    fontSize: 30,
    width: 20,
    height: 20,
    fontFamily:"bold",
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
  borderRadius: 12,
  alignItems: 'center',  
  justifyContent: 'center',
  backgroundColor: 'whitesmoke',
  paddingVertical: 5,
  height: 50,
  paddingHorizontal: 12,
},

mainBox:{
    borderRadius: 10,
    marginLeft:25,
    marginRight:25,
},
  bannerIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  bannerText: {
    flex: 1,
    color: '#3b3b3b',
    alignItems: 'center',
    fontSize: CustomStyle.font,
  },
  bannerArrow: {
    color: CustomStyle.primary,
    fontSize: 30,
    marginRight:20,
    width: 32,
    fontFamily:"bold",
  },

  fieldLabel: {
    marginTop: 40,
    marginBottom: 8,
    color: 'black',
    fontWeight: '600',
    marginLeft:10,
    fontSize: CustomStyle.font,
  },

  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight:40,
    marginTop:8,
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

