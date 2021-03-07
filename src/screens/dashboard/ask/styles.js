import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../utils/constants';

const width = metrics.width / 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    borderColor: colors.blue,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
  },

  buttonsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: width - 150,
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: colors.offWhite,
  },

  header: {
    backgroundColor: colors.offWhite,
    overflow: 'hidden',
  },
});

export const modifiers = {
  container: {
    root: {},
  },
  searchBar: {
    root: {
      marginTop: 10,
    },
  },
  button: {
    root: {
      marginHorizontal: 5,
    },
  },
};
