import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../../../../../utils/constants';

let width = metrics.width / 2;

let parentPaddingValue = width * 0.1;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
  buttonContainerStyle: {
    alignSelf: 'center',
    borderRadius: 25,
    padding: 10,
    width: width - parentPadding,
    backgroundColor: colors.blue,
    marginTop: 10,
  },

  buttonTextStyle: {
    textAlign: 'center',
    fontSize: text.size.small,
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.white,
  },

  cancelTextStyle: {
    textAlign: 'left',
    alignSelf: 'center',
    color: colors.black,
    fontSize: text.size.small,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  container: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: colors.white,
    width: width * 0.8,
  },

  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: parentPaddingValue * 0.5,
    backgroundColor: colors.white,
    borderBottomColor: colors.greyBgAsk,
    borderBottomWidth: 3,
  },

  inputLabel: {margin: 5, color: 'black', fontSize: text.size.small},

  inputTextParentContainerStyle: {
    flexDirection: 'column',
    width: width,
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    marginTop: metrics.height * 0.02,
  },

  inputTextContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width - parentPadding,
    marginTop: metrics.height * 0.02,
    borderBottomColor: colors.black,
    borderBottomWidth: 0.5,
  },

  inputTypePasswordStyle: {
    color: colors.black,
    fontSize: text.size.small,
    fontFamily: text.fontFamily.poppinsRegular,
    textAlign: 'left',
    width: width - parentPadding - width * 0.05,
  },

  passwordHideShowIconStyle: {
    height: width * 0.05,
    width: width * 0.05,
    marginTop: width * 0.02,
  },

  passwordValidationContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    marginTop: metrics.height * 0.01,
  },

  passwordValidationTextStyle: {
    marginLeft: 3,
    color: colors.black,
    fontSize: text.size.small,
    fontFamily: text.fontFamily.poppinsRegular,
    textAlign: 'left',
    width: width - parentPadding - 15,
  },

  passwordValidChecboxIconStyle: {
    height: 12,
    width: 12,
  },

  titleTextStyle: {
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    width: width,
    color: colors.black,
    fontSize: text.size.small,
    fontFamily: text.fontFamily.poppinsRegular,
  },
});

export default styles;
