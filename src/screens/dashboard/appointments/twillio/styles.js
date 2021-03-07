import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../../../utils/constants';

const width = metrics.width / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
  },
  form: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  formGroup: {
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    width: 70,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 70,
    marginVertical: 10,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  textInput: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  callContainer: {
    flex: 1,
  },
  callWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  remoteGrid: {
    flex: 1,
  },
  remoteVideo: {
    flex: 1,
  },

  localVideo: {
    position: 'absolute',
    right: 10,
    top: metrics.height * 0.05,
    width: width / 5,
    height: width / 8,
  },

  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  container: {
    flex: 1,
    paddingTop: 20,
  },
  textlayout: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: width * 0.85,
    height: 200,
    borderRadius: 25,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
    borderColor: colors.blue,
    borderWidth: 1,
  },

  inputsContainer: {
    marginTop: 10,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
  },

  input: {
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    height: 50,
    borderWidth: 0,
    borderColor: '#3f51b5',
    borderRadius: 20,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 10,
  },

  buttonStyle: {
    margin: 20,
    marginLeft: 50,
    marginRight: 50,
    justifyContent: 'center',
  },

  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: colors.blue,
    borderRadius: 20,
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },

  LoadingIndicator: {
    marginTop: 40,
  },

  subtitle: {
    color: colors.black,
    textAlign: 'center',
    margin: 30,
    fontFamily: text.fontFamily.poppinsRegular,
    fontSize: text.size.medium,
  },

  icon: {
    alignSelf: 'center',
    margin: 5,
  },
});

export default styles;