import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../../utils/constants';

const width = metrics.width / 2;

let parentPaddingValue = width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = width * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

export const AVATAR_SIZE = 111;

const styles = StyleSheet.create({
  cancelButton: {
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    width: width * 0.65,
    backgroundColor: colors.white,
    marginBottom: metrics.height * 0.01,
    borderColor: colors.blue,
    borderWidth: 1,
  },

  cancelButtonText: {
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

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.offWhite,
  },

  detail: {
    alignItems: 'center',
    margin: 20,
  },

  detailContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  detailText: {
    color: colors.black,
    marginBottom: 10,
    fontWeight: 'bold',
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

  textStyle: {
    color: colors.white,
    textAlign: 'center',
  },

  title: {
    color: colors.black,
    alignSelf: 'center',
    marginVertical: 5,
    fontSize: 20,
  },

  visitContainer: {
    alignItems: 'flex-start',
    backgroundColor: colors.offWhite,
    width: width * 0.75,
    height: 225,
    borderRadius: 15,
    margin: 15,
    borderColor: colors.blue,
    borderWidth: 3,
  },
});

export default styles;

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
