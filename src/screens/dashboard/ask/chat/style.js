import {StyleSheet} from 'react-native';
import {metrics, text, colors} from '../../../../utils/constants';

let width = metrics.width / 2;
let parentPaddingValue = width * 0.05;
let parentPadding = parentPaddingValue * 2;

const styles = StyleSheet.create({
  actionModalBlueTextStyle: {
    width: width - 20,
    color: colors.blue,
    textAlign: 'center',
    padding: 12,
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  actionModalInnerContainerStyle: {
    borderRadius: 10,
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    width: width - 20,
    backgroundColor: colors.white,
  },

  actionModalLineSeperator: {
    backgroundColor: colors.greyBgAsk,
    width: width - 20,
    height: 1,
  },

  actionModalParentContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.modalBgSemiTransparentColor,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 200,
    paddingBottom: 20,
  },

  actionModalOkBtnErrorContainerStyle: {
    width: metrics.DEVICE_WIDTH - 20,
    padding: 10,
    backgroundColor: colors.white,
    marginTop: 10,
    borderRadius: 10,
  },

  actionModalOkBtnErrorTextStyle: {
    color: colors.blue,
    textAlign: 'center',
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  actionModalTitleTextStyle: {
    width: width - 20,
    color: colors.lightGrey,
    textAlign: 'center',
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
    padding: 12,
  },

  cameraContainerStyle: {
    alignSelf: 'center',
  },

  chatInputContainer: {
    flexDirection: 'row',
    width: metrics.DEVICE_WIDTH,
  },

  chatInputParentContainer: {
    flexDirection: 'column',
    width: metrics.DEVICE_WIDTH,
    padding: parentPaddingValue,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.greyBgAsk,
  },

  dateContainerStyle: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dateTextStyle: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: colors.black,
    fontSize: text.size.small,
    fontFamily: text.fontFamily.poppinsRegular,
    padding: 5,
  },

  headerStyle: {
    // paddingTop: getStatusBarHeight() + parentPaddingValue * 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: parentPaddingValue,
    paddingBottom: parentPaddingValue * 0.5,
    paddingRight: parentPaddingValue,
    backgroundColor: colors.white,
    borderBottomColor: colors.greyBgAsk,
    borderBottomWidth: 3,
  },

  imageContainerStyle: {
    marginTop: 16,
  },

  imageCrossContainerStyle: {
    right: 0,
    marginTop: 20,
    position: 'absolute',
  },

  imageCrossStyle: {
    width: 16,
    height: 16,
  },

  imageParentContainerStyle: {
    width: width * 0.75,
    borderRadius: 15,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom: 5,
    backgroundColor: colors.white,
  },

  messagesLeftTextStyle: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    color: colors.black,
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
    padding: 10,
  },

  messagesRightTextStyle: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    color: colors.black,
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
    padding: 10,
  },

  parentContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.offWhite,
  },

  profileHeaderStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  resolvedParentContainer: {
    flex: 1,
    height: 200,
    flexDirection: 'column',
    width: width,
    padding: parentPaddingValue,
  },

  resovledTextStyle: {
    color: colors.greyBgAsk,
    textAlign: 'center',
    fontSize: text.size.xLarge,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  rowLeftContainerStyle: {
    backgroundColor: colors.greyBgAsk,
    borderRadius: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 5,
    padding: 5,
  },

  rowLeftParentContainerStyle: {
    flexDirection: 'row',
    marginRight: 70,
    marginTop: 10,
    marginBottom: 10,
  },

  rowRightContainerView: {
    padding: 5,
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 5,
  },

  rowRightParentContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 70,
    marginTop: 10,
    marginBottom: 10,
  },

  sendButtonContainerStyle: {
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: width - parentPadding - 30 - (width - parentPadding - 30 - 10 - 44),
  },

  staticTextContainerStyle: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  staticTextStyle: {
    color: colors.black,
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  textContainerStyle: {
    flexDirection: 'row',
    marginLeft: 2,
    width: width - parentPadding - 30,
    borderColor: colors.greyBgAsk,
    borderWidth: 2,
    borderRadius: 5,
    paddingBottom: 5,
    paddingTop: 5,
  },

  textInputStyle: {
    padding: 5,
    width: width - parentPadding - 30 - 10 - 44,
    color: colors.black,
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  titleTextStyle: {
    paddingLeft: 5,
    color: colors.black,
    fontSize: text.size.large,
    fontFamily: text.fontFamily.poppinsRegular,
  },
});
export default styles;
