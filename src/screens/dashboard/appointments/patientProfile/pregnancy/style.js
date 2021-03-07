import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../../../utils/constants';

const width = metrics.width / 2;

let parentPaddingValue = width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = width * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

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
    width: width * 0.8,
    // backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
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

  heading: {
    fontSize: text.size.xLarge,
    color: colors.black,
    marginBottom: 5,
  },

  singleInput: {
    textAlign: 'center',
    borderBottomColor: colors.blue,
    borderBottomWidth: 2,
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: 50,
    color: 'black',
    padding: 10,
  },

  dropDownContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: width * 0.4,
  },

  dropDownText: {
    color: colors.black,
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsRegular,
    textAlign: 'left',
    alignSelf: 'center',
    width: width - parentPadding - width * 0.05,
  },

  inputLabel: {color: 'black', fontSize: text.size.small},

  inputContainer: {
    flexDirection: 'row',
  },

  checkBox: {
    fontSize: text.size.small,
  },
});

export default styles;
