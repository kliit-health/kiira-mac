import {StyleSheet} from 'react-native';
import {colors, text, metrics} from '../../../../utils/constants';

const width = metrics.width / 2;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  check: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: 15,
  },

  left: {
    flex: 1,
    borderWidth: 3,
    borderColor: colors.blue,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
  },

  right: {
    flex: 1,
    borderWidth: 3,
    borderColor: colors.blue,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
  },

  header: {
    flexDirection: 'row',
    width: width,
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

  icon: {
    marginLeft: 5,
    width: 20,
    height: 20,
  },

  info: {
    color: colors.black,
    padding: 20,
  },

  infoContainer: {
    width: width * 0.8,
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 10,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 3, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 3, //IOS
    elevation: 2, // Android
    marginBottom: 30,
  },

  lockButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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

  name: {
    marginLeft: 10,
    fontSize: text.size.medium,
    fontWeight: '500',
  },

  profileContainer: {
    flexDirection: 'row',
    width: width * 0.8,
    position: 'relative',
    top: -30,
    left: width * 0.1,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 10,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 3, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 3, //IOS
    elevation: 2, // Android
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
