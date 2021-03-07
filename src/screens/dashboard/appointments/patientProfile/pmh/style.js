import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../../../utils/constants';

const width = metrics.width / 2;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  input: {
    borderColor: colors.blue,
    borderWidth: 5,
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: 50,
    height: 200,
    color: 'black',
    padding: 10,
    textAlignVertical: 'top',
  },

  prevButtonContainerStyle: {
    justifyContent: 'space-around',
    borderColor: colors.blue,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: width * 0.3,
    backgroundColor: colors.white,
    marginTop: metrics.height * 0.03,
  },

  prevButtonTextStyle: {
    textAlign: 'center',
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.blue,
  },

  nextButtonContainerStyle: {
    justifyContent: 'space-around',
    borderRadius: 10,
    padding: 10,
    width: width * 0.3,
    backgroundColor: colors.blue,
    marginTop: metrics.height * 0.03,
  },

  nextButtonTextStyle: {
    textAlign: 'center',
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.white,
  },

  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 50,
  },

  question: {
    alignSelf: 'center',
    paddingVertical: 40,
    paddingHorizontal: 15,
    fontSize: text.size.xLarge,
  },
});

export default styles;
