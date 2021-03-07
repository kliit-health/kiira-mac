import {StyleSheet} from 'react-native';
import {metrics, colors, text} from '../../../../utils/constants';

const width = metrics.width / 2;
let parentPaddingValue = width * 0.1;

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: width * 0.5,
    height: 42,
    backgroundColor: colors.white,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.blue,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  dateContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.gray,
    width: width,
  },

  dateText: {
    fontSize: 18,
    marginVertical: 15,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  informationContainer: {
    marginHorizontal: 25,
    flexDirection: 'column',
  },

  informationTitle: {
    fontSize: 18,
    marginBottom: 8,
    color: colors.blue,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  informationText: {
    fontSize: 16,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  locationImage: {
    height: 35,
    width: 20,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 20,
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

  modalImage: {
    height: 80,
    width: 80,
    marginVertical: 25,
  },

  modalText: {
    marginHorizontal: 15,
    fontSize: 22,
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '700',
  },

  modalButtonContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  modalButton: {
    backgroundColor: colors.blue,
    borderRadius: 20,
    width: 100,
    padding: 10,
    marginHorizontal: 10,
  },

  name: {
    marginVertical: metrics.height * 0.01,
    fontSize: text.size.large,
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '700',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  expertName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  expertNameTextStyle: {
    color: colors.black,
    fontSize: text.size.large,
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '700',
  },

  expertProfession: {
    flexDirection: 'row',
  },

  availability: {
    fontSize: text.size.large,
    fontWeight: '500',
    marginLeft: -70,
    marginTop: 20,
    width: width,
  },

  expertProfessionTextStyle: {
    fontSize: text.size.medium,
    color: colors.black,
    marginRight: 10,
  },

  patientParentContainerStyle: {
    backgroundColor: colors.white,
    paddingLeft: parentPaddingValue * 0.2,
    paddingRight: parentPaddingValue * 0.2,
    paddingBottom: parentPaddingValue * 0.2,
    paddingTop: parentPaddingValue * 0.2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: width,
  },

  myRecentExpertContainerStyle: {
    backgroundColor: colors.white,
    paddingLeft: parentPaddingValue * 0.2,
    paddingRight: parentPaddingValue * 0.2,
    paddingBottom: parentPaddingValue * 0.2,
    paddingTop: parentPaddingValue * 0.2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: width,
    marginTop: 10,
  },

  expertImage: {
    width: 100,
    height: 100,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: colors.blue,
  },

  expertImageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    zIndex: 1,
  },

  parentContainerStyle: {
    flexDirection: 'column',
    paddingLeft: parentPaddingValue + 4,
    paddingRight: (parentPaddingValue + 4) * 0.5,
    backgroundColor: 'white',
    borderRadius: 15,
  },

  reason: {
    marginTop: metrics.height * 0.005,
    marginLeft: 110,
    fontSize: text.size.large,
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '400',
    justifyContent: 'flex-start',
  },

  textStyle: {
    color: colors.white,
    textAlign: 'center',
  },

  expertInfoParentContainerStyle: {
    backgroundColor: colors.white,
    paddingLeft: parentPaddingValue * 0.2,
    paddingRight: parentPaddingValue * 0.2,
    paddingBottom: parentPaddingValue * 0.2,
    paddingTop: parentPaddingValue * 0.2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: width,
    marginTop: 10,
  },

  visitDetailsTitle: {
    backgroundColor: colors.blue,
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
    color: colors.white,
    borderColor: colors.black,
    borderWidth: 1,
    width: width * 0.85,
  },

  visitDetailsParentContainer: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: width * 0.85,
    height: 300,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    margin: 15,
    borderColor: colors.blue,
    borderWidth: 1,
    fontFamily: text.fontFamily.poppinsRegular,
  },
});

export default styles;
