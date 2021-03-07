import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../../utils/constants';

const width = metrics.width / 2;

const styles = StyleSheet.create({
  check: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 20,
    height: 20,
  },

  container: {
    flex: 1,
  },

  icon: {
    marginLeft: 5,
    width: 20,
    height: 20,
  },

  info: {
    padding: 20,
  },

  infoContainer: {
    width: width * 0.8,
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 10,
    marginVertical: 15,
    borderRadius: 5,
    borderColor: colors.blue,
    borderWidth: 3,
  },
});

export default styles;
