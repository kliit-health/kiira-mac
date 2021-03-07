import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../utils/constants';

export default StyleSheet.create({
  cancelSelectStateButtonTextStyle: {
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.white,
    textAlign: 'center',
    fontSize: text.size.regular,
  },

  cancelSelectStateButtonStyle: {
    backgroundColor: colors.blue,
    padding: 15,
    width: metrics.width * 0.9,
  },

  emptyContainerStyle: {
    padding: 15,
    width: metrics.width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTextStyle: {
    fontFamily: text.fontFamily.poppinsBold,
    color: colors.black,
    fontSize: text.size.large,
  },

  modalParentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalSelectStateContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: metrics.width * 0.9,
    backgroundColor: colors.white,
  },

  searchBarContaineStyle: {
    width: metrics.width * 0.9,
    backgroundColor: colors.white,
  },

  searchBarInputContainerStyle: {
    backgroundColor: colors.whiteColor,
  },

  searchBarInputTextStyle: {
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.black,
    fontSize: text.size.regular,
  },

  saparatorStyle: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 0.5,
    width: metrics.width * 0.9,
  },

  stateTextContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },

  stateTextStyle: {
    fontFamily: text.fontFamily.poppinsRegular,
    alignSelf: 'center',
    color: colors.black,
    fontSize: text.size.regular,
  },
});
