import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../utils/constants';

const width = metrics.width / 2;

let parentPaddingValue = width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = width * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

export const AVATAR_SIZE = 111;

export default StyleSheet.create({
  cancelTextStyle: {
    textAlign: 'left',
    color: colors.black,
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  container: {
    // flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.offWhite,
    borderWidth: 3,
    borderColor: colors.blue,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    width: width - 42,
    height: metrics.height - 22,
  },

  containerRight: {
    // flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.offWhite,
    borderWidth: 3,
    borderColor: colors.blue,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
    width: width - 42,
    height: metrics.height - 22,
  },

  header: {
    backgroundColor: colors.lightBlue,
    overflow: 'hidden',
  },

  creditButtonStyle: {
    marginLeft: -9,
    marginTop: 14,
    width: width * 0.49,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.white,
  },

  creditButtonTextStyle: {
    textAlign: 'center',
    paddingTop: 11,
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.medium,
    color: colors.blue,
  },

  creditTextStyle: {
    textAlign: 'left',
    paddingTop: 10,
    color: colors.white,
    fontSize: text.size.xLarge,
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '500',
  },

  genderTextStyle: {
    textAlign: 'left',
    paddingTop: 5,
    color: colors.white,
    fontSize: text.size.xLarge,
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '400',
  },

  itemsParentContainerStyle: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingLeft: parentPaddingValue,
    paddingRight: parentPaddingValue,
    paddingTop: parentPaddingValue * 0.5,
    paddingBottom: parentPaddingValue * 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1.5,
  },

  itemTextStyle: {
    textAlign: 'left',
    paddingTop: 5,
    color: colors.black,
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  logoutParentContainerStyle: {
    marginTop: metrics.DEVICE_WIDTH * 0.1,
    marginBottom: metrics.DEVICE_WIDTH * 0.1,
  },

  logoutTextStyle: {
    textAlign: 'center',
    paddingTop: 10,
    color: colors.red,
    fontSize: text.size.xLarge,
    width: width,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  nameTextStyle: {
    textAlign: 'left',
    color: colors.white,
    fontSize: text.size.xxLarge,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  myRecentExpertContainerStyle: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: width * 0.95,
    height: 425,
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    // margin: 15,
  },

  profileImageParentContainerStyle: {
    flexDirection: 'column',
  },

  profileInfoParentContainerStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
  },

  noContainerStyle: {
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    width: width - childPadding,
    backgroundColor: colors.white,
    marginTop: metrics.height * 0.01,
    borderColor: colors.blue,
    borderWidth: 1,
  },

  noTextStyle: {
    textAlign: 'center',
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.blue,
  },

  yesContainerStyle: {
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    width: width - childPadding,
    backgroundColor: colors.blue,
    marginTop: metrics.height * 0.03,
  },

  yesTextStyle: {
    textAlign: 'center',
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.white,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    zIndex: 1,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  title: {
    color: colors.black,
    fontSize: text.size.xxLarge,
    fontFamily: text.fontFamily.poppinsRegular,
    textAlign: 'center',
    margin: 20,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    margin: 30,
  },

  titleContainerStyle: {
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    borderRadius: 50,
    overflow: 'hidden',
  },

  titleTextStyle: {
    color: colors.white,
    fontSize: text.size.xxLarge,
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '500',
  },

  safeArea: {
    flex: 1,
  },

  dateContainerStyle: {
    alignSelf: 'center',
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 50,
    padding: 8,
    backgroundColor: colors.white,
    marginVertical: metrics.height * 0.015,
    elevation: 3,
  },

  dateSelectedContainerStyle: {
    alignSelf: 'center',
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 50,
    padding: 8,
    backgroundColor: colors.blue,
    marginVertical: metrics.height * 0.015,
    elevation: 3,
  },

  dateSelectedTextStyle: {
    textAlign: 'center',
    color: colors.white,
    width: 18,
    elevation: 3,
  },

  dateTextStyle: {
    textAlign: 'center',
    color: colors.black,
    width: 18,
    elevation: 3,
  },

  headerText: {
    color: colors.white,
    fontSize: text.size.xxLarge,
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '500',
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },

  safeArea: {
    flex: 1,
  },

  searchBar: {
    alignSelf: 'center',
    width: width * 0.75,
    backgroundColor: colors.greyBgAsk,
    margin: 5,
    backgroundColor: 'transparent',
    borderWidth: 0, //no effect
    shadowColor: 'transparent', //no effect
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },

  title: {
    textAlign: 'center',
    color: colors.black,
    fontSize: 40,
    fontWeight: 'bold',
    margin: 30,
    paddingBottom: 200,
  },

  visitContainerStyle: {
    padding: parentPaddingValue,
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignSelf: 'center',
    width: width * 0.9,
    overflow: 'visible',
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    padding: 15,
  },

  visitParentContainerStyle: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: width * 0.9,
    overflow: 'visible',
    marginVertical: 40,
    marginHorizontal: 20,
  },

  userInfo: {
    flexDirection: 'column',
    width: width * 0.9,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },

  userInfoText: {
    fontSize: text.size.large,
    color: colors.black,
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '400',
  },

  timeContainer: {
    backgroundColor: colors.pink,
    marginLeft: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    padding: 5,
  },

  timeImage: {
    width: 20,
    height: 20,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  timeTextStyle: {
    fontSize: text.size.medium,
    color: colors.white,
    fontWeight: '200',
    fontFamily: text.fontFamily.poppinsRegular,
  },
  appointmentsList: {
    padding: 10,
  },

  scroll: {
    backgroundColor: colors.lightBlue,
  },
});

export const modifiers = {
  searchBar: {
    root: {
      marginTop: 20,
    },
  },
  container: {
    safeAreaBottom: {
      height: 0,
    },
  },
};
