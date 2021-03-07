import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 5,
    borderColor: colors.blueGrey,
    borderWidth: 3,
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: colors.lightPurple,
    width: '30%',
    height: 45,
    marginBottom: 20,
    textAlign: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },

  TextInput: {
    height: 50,
    width: '100%',
    flex: 1,
    padding: 10,
    // marginLeft: 20,
    borderWidth: 0,
    color: 'black',
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '50%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#0089FF',
  },
});

export default styles;
