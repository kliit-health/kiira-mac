import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../../../utils/constants';

const width = metrics.width / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonContainerStyle: {
    alignSelf: 'center',
    borderRadius: 25,
    padding: 10,
    width: width * 0.65,
    backgroundColor: colors.blue,
    height: 50,
    marginVertical: metrics.height * 0.03,
  },

  buttonTextStyle: {
    textAlign: 'center',
    fontSize: text.size.xxLarge,
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.white,
  },

  input: {
    borderColor: colors.blue,
    borderWidth: 5,
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: 50,
    height: 420,
    color: 'black',
    padding: 10,
  },

  title: {
    width: width * 0.85,
    fontSize: text.size.xxLarge,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },

  subtitle: {
    width: width * 0.85,
    fontSize: text.size.medium,
    padding: 20,
  },

  warning: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: width * 0.85,
    borderRadius: 25,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    borderColor: colors.red,
    borderWidth: 1,
    margin: 40,
  },

  section: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: width * 0.85,
    borderRadius: 25,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    borderColor: colors.blue,
    borderWidth: 1,
    margin: 20,
  },
});

export default styles;
