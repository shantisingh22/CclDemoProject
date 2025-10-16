import { StyleSheet } from 'react-native';
import { CustomStyle } from './CustomStyle';

const WelcomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CustomStyle.primary,
    justifyContent: 'space-between',
  },
  top: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginTop: 40,
    marginBottom: 16,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
  },
  bottom: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 90,
    alignItems: 'center',
  },
  programTitle: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 5,
    color: '#333',
  },
  programSubtitle: {
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
  },
  registerButton: {
    backgroundColor: '#1098d6',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 112,
    marginBottom: 15,
  },
  registerText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  loginButton: {
    borderColor: '#1098d6',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 120,
  },
  loginText: {
    fontWeight: '700',
    fontSize: 16,
  },

  underline: {
  width: 80,     
  height: 1,      
  backgroundColor: 'lightgray',
  marginBottom: 130,    
  borderRadius: 1,
},

});
export default WelcomeScreenStyles;
