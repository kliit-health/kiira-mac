import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../../../utils/constants';

const width = metrics.width / 2;

let parentPaddingValue = width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = width * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

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

  question: {
    alignSelf: 'center',
    paddingVertical: 40,
    paddingHorizontal: 15,
    fontSize: text.size.xLarge,
  },

  submitButtonStyle: {
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    width: width - childPadding,
    backgroundColor: colors.blue,
    marginTop: metrics.height * 0.03,
  },

  submitButtonTextStyle: {
    textAlign: 'center',
    fontSize: text.size.medium,
    fontFamily: text.fontFamily.poppinsRegular,
    color: colors.white,
  },
});

export default styles;
