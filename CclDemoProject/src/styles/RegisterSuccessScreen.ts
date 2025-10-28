import { StyleSheet } from 'react-native';
import { COLORS } from './CustomStyle';
import {scale, verticalScale, moderateScale } from 'react-native-size-matters/extend';

const createStyles = () =>
  StyleSheet.create({
    screenBox: {
      aspectRatio: 412/917,
      backgroundColor: COLORS.BLUE,
    },

    scrollContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    imageContainer: {
      alignItems: 'center',
      marginTop: verticalScale(328),  
      width: scale(128),
      aspectRatio: 128/88,
    },

    imageBox: {
      width:"100%",
      height:"100%", 
      display: 'flex',
      paddingTop: moderateScale(5),
      paddingRight: moderateScale(3),
      paddingBottom: moderateScale(4),
      paddingLeft: moderateScale(6),      
      borderRadius: scale(10),
      resizeMode: 'cover',
      flexShrink:0, 
    },

    textBlock: {
      alignItems: 'center',
      marginTop: verticalScale(59),
    },

    thanksBox: {
      color:"#FFF",
      fontSize: moderateScale(16),
      textAlign: 'center',
      fontFamily:"Quicksand",
      fontWeight:"600",
      fontStyle:"normal",
      lineHeight:moderateScale(16)*1.5,
      flexShrink:0, 
    },

    name: {
      marginTop: verticalScale(25),
      color: "#FFF",
      fontSize: moderateScale(20),
      textAlign: 'center',
      fontFamily:"Quicksand",
      fontWeight:"600",
      fontStyle:"normal",
      lineHeight: moderateScale(20) * 1.2,
      flexShrink:0, 
    },

    subLine: {
      marginTop: verticalScale(3),
      color: COLORS.WHITE,
      fontSize: moderateScale(14),
      textAlign: 'center',
      fontFamily:"Quicksand",
      fontWeight:"500",
      fontStyle:"normal",
      lineHeight: moderateScale(14) * 1.4,
    },

    registrationCheckButton: {
      alignItems: 'center',
      marginTop: verticalScale(76),
    },

    CheckButtonBox: {
      borderRadius: scale(7),
      backgroundColor: COLORS.WHITE,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: moderateScale(15),
      paddingHorizontal: moderateScale(60),
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.18,
      shadowRadius: 3,
      elevation: 3,            
    },

    CheckButtonBoxText: {
      textAlign: 'center',
      fontSize: moderateScale(16),
      fontWeight: '600',
      // letterSpacing: 1,
      fontFamily:"Quicksand",
      fontStyle:"normal",
      lineHeight: moderateScale(16) * 1.4,

    },

    CheckButtonBoxArrow: {
      color: COLORS.BLUE,
      fontWeight: '900',
    },
  });

export default createStyles;






























