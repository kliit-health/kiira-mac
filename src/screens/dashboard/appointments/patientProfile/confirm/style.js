import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../../../utils/constants';

const width = metrics.width / 2;

const styles = StyleSheet.create({
  buttonContainerStyle: {
    alignSelf: 'center',
    borderRadius: 25,
    padding: 10,
    width: width * 0.85,
    backgroundColor: colors.blue,
    height: 50,
  },

  buttonTextStyle: {
    textAlign: 'center',
    fontSize: text.size.xxLarge,
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.white,
  },

  cancelButton: {
    backgroundColor: 'white',
    borderColor: '#2196F3',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
    marginBottom: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  container: {
    flex: 1,
    paddingBottom: 50,
    backgroundColor: colors.white,
  },

  header: {
    flexDirection: 'row',
    width,
    paddingVertical: 60,
    backgroundColor: colors.blue,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerText: {
    color: colors.white,
    fontSize: text.size.xxLarge,
    fontFamily: text.fontFamily.poppinsRegular,
    fontWeight: '500',
    marginLeft: width * 0.15,
  },

  lockButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
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
    borderColor: 'red',
    borderWidth: 2,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  subtitle: {
    width: width * 0.85,
    fontSize: text.size.large,
    padding: 20,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  title: {
    width: width * 0.85,
    fontSize: text.size.xxLarge,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});

export default styles;
