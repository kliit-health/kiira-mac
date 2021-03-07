import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../../../utils/constants';

let width = metrics.width / 2;

let parentPaddingValue = width * 0.05;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
  birthDayContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width - parentPadding,
    marginTop: metrics.height * 0.03,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 0.5,
    paddingBottom: metrics.height * 0.01,
  },

  birthDayTextStyle: {
    color: colors.black,
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsRegular,
    textAlign: 'left',
    alignSelf: 'center',
    width: width - parentPadding,
  },

  btnContainerStyle: {
    marginTop: metrics.height * 0.02,
    marginBottom: metrics.height * 0.02,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 0.5,
    borderTopColor: colors.lightGrey,
    borderTopWidth: 0.5,
    padding: 10,
    backgroundColor: colors.white,
    width: width,
  },

  btnTextStyle: {
    textAlign: 'center',
    color: colors.blue,
    fontSize: text.size.large,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  cancelTextStyle: {
    textAlign: 'left',
    color: colors.black,
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  changeProfileTextStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    textAlign: 'center',
    color: colors.blueColor,
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.offWhiteColor,
    // marginTop: 35,
    borderColor: colors.blue,
    borderWidth: 3,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  doneTextStyle: {
    padding: 5,
    textAlign: 'left',
    color: colors.white,
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  dropDownIconStyle: {
    height: width * 0.02,
    width: width * 0.02,
    // marginRight: 5,
  },

  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: parentPaddingValue * 0.5,
    backgroundColor: colors.whiteColor,
    borderBottomColor: colors.greyBgAsk,
    backgroundColor: colors.blue,
  },

  inputTextContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    width: width * 0.9,
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    marginHorizontal: 5,
    marginTop: 10,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 0.5,
  },

  inputTextBioContainer: {
    // flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.8,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 0.5,
    // paddingBottom: 15,
  },

  inputLabel: {marginRight: 5, color: 'black', fontSize: text.size.small},

  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: metrics.height * 0.02,
  },

  inputTextCell: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: (width - parentPadding) * 0.47,
  },

  inputTypeStyle: {
    color: colors.black,
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
    textAlign: 'left',
    height: 30,
    width: (width - parentPadding) * 0.4,
    marginVertical: 5,
  },

  inputTypeBio: {
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.black,
    fontSize: text.size.small,
    fontFamily: text.fontFamily.poppinsRegular,
    // textAlign: 'center',
    height: 160,
    width: width * 0.8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.blue,
    marginLeft: 10,
    paddingBottom: 15,
  },

  inputTypeState: {
    color: colors.black,
    fontSize: text.size.small,
    fontFamily: text.fontFamily.poppinsRegular,
    textAlign: 'center',
    width: (width - parentPadding) * 0.8,
    marginVertical: 15,
  },

  profileImgViewStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    padding: parentPaddingValue,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 0.5,
  },

  pronounsParentContainerStyle: {
    width: width,
    backgroundColor: colors.whiteColor,
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    paddingTop: metrics.height * 0.01,
    paddingBottom: metrics.height * 0.01,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 0.5,
  },

  pronounsTitleTextStyle: {
    color: colors.black,
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
    textAlign: 'left',
    width: width - parentPadding,
  },

  pronounsContainerStyle: {
    marginTop: width * 0.02,
    width: width - parentPadding,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pronounsTextStyle: {
    paddingLeft: 10,
    color: colors.black,
    fontSize: text.size.small,
    fontFamily: text.fontFamily.poppinsRegular,
    textAlign: 'left',
    width: width - parentPadding - width * 0.05,
  },

  pronounsChecboxIconStyle: {
    height: width * 0.03,
    width: width * 0.03,
  },

  stateDropDownContainerStyle: {
    // flexDirection: 'column',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    width: width * 0.7,
    // marginTop: metrics.height * 0.03,
    // borderBottomColor: colors.lightGrey,
    // borderBottomWidth: 0.5,
    // paddingBottom: metrics.height * 0.01,
  },

  stateDropDownTextStyle: {
    color: colors.black,
    fontSize: text.size.regular,
    fontFamily: text.fontFamily.poppinsRegular,
    textAlign: 'left',
    alignSelf: 'center',
    width: width - parentPadding - width * 0.05,
  },

  titleTextStyle: {
    marginLeft: 200,
    textAlign: 'center',
    color: colors.white,
    fontSize: text.size.large,
    fontFamily: text.fontFamily.poppinsRegular,
  },
});

export default styles;
