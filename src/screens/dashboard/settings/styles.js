import {StyleSheet} from 'react-native';
import {text, colors} from '../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    borderColor: colors.blue,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.lightBlue,
  },

  listItem: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 50,
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 25,
    marginVertical: 25,
    padding: 12,
  },

  listItemActive: {
    backgroundColor: colors.blue,
  },

  listItemText: {
    color: colors.blue,
    fontSize: 16,
  },

  listItemActiveText: {
    color: colors.white,
    fontSize: 16,
  },
});

export default styles;
