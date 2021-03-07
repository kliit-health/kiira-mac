import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../../../utils/constants';

const width = metrics.width / 2;

const styles = StyleSheet.create({
  blank: {
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: 50,
    height: 200,
    padding: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  input: {
    borderColor: colors.blue,
    borderWidth: 5,
    width: width * 0.75,
    alignSelf: 'center',
    // marginTop: 50,
    padding: 5,
    height: 200,
    color: 'black',
    // padding: 10,
    // textAlignVertical: 'top',
  },

  prevButtonContainerStyle: {
    justifyContent: 'space-around',
    borderColor: colors.blue,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: width * 0.3,
    backgroundColor: colors.white,
    marginTop: metrics.height * 0.03,
  },

  prevButtonTextStyle: {
    textAlign: 'center',
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.blue,
  },

  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  nextButtonContainerStyle: {
    justifyContent: 'space-around',
    borderRadius: 10,
    padding: 10,
    width: width * 0.3,
    backgroundColor: colors.blue,
    marginTop: metrics.height * 0.03,
  },

  nextButtonTextStyle: {
    textAlign: 'center',
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.white,
  },

  question: {
    alignSelf: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    fontSize: text.size.xLarge,
  },

  singleInput: {
    textAlign: 'center',
    borderColor: colors.blue,
    borderWidth: 2,
    width: width * 0.22,
    // alignSelf: 'center',
    // marginTop: 50,
    color: 'black',
    padding: 5,
  },

  heading: {
    fontSize: text.size.xLarge,
    color: colors.black,
    marginBottom: 5,
  },

  inputLabel: {marginVertical: 5, color: 'black', fontSize: text.size.small},

  inputContainer: {
    flexDirection: 'row',
  },

  checkBox: {
    fontSize: text.size.small,
  },
});

export default styles;
