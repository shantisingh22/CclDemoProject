import { StyleSheet } from 'react-native';
import { CustomStyle } from './CustomStyle';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: CustomStyle.primary,
    backgroundColor: CustomStyle.white,
    borderRadius: CustomStyle.radius,
    paddingVertical: CustomStyle.padding,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: CustomStyle.primary,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  label: {
    color: CustomStyle.primary,
    fontWeight: '700',
    fontSize: CustomStyle.font,
  },
});

export default styles;




// import { StyleSheet } from 'react-native';
// import { CustomStyle } from './CustomStyle';

// const styles = StyleSheet.create({
//   button: {
//     borderWidth: 1,
//     borderColor: CustomStyle['--primary-color'],
//     backgroundColor: CustomStyle['--white'],
//     borderRadius: CustomStyle['--radius'],
//     paddingVertical: CustomStyle['--padding'],
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: CustomStyle['--primary-color'],
//     shadowOpacity: 0.15,
//     shadowRadius: 8,
//     elevation: 3,
//   },
//   label: {
//     color: CustomStyle['--primary-color'],
//     fontWeight: '700',
//     fontSize: CustomStyle['--font-size'],
//   },
// });

// export default styles;
