import {StyleSheet} from 'react-native';
import {text, colors} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },

  fieldLabel: {
    fontSize: text.size.small,
    color: colors.black,
    fontWeight: '100',
  },

  floatingLabel: {
    position: 'absolute',
    top: 0,
    left: 0,
  },

  valueText: {
    fontSize: text.size.regular,
    color: colors.black,
    paddingTop: 20,
  },
});
export default styles;
