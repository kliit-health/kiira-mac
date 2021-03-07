import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../../../../utils/constants';

const width = metrics.width / 2;

const styles = StyleSheet.create({
  name: {
    marginLeft: 10,
    color: colors.black,
    fontSize: text.size.medium,
    fontWeight: '800',
  },

  profileContainer: {
    flexDirection: 'row',
    width: width * 0.5,
    // position: 'relative',
    // top: -10,
    // left: width / 2,
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 5,
    marginTop: 10,
    borderColor: colors.black,
    borderWidth: 2,
  },

  profileImage: {
    marginLeft: 5,
    width: 60,
    height: 60,
    borderRadius: 50,
  },

  reason: {
    marginTop: 5,
    marginLeft: 10,
    color: colors.black,
  },
});

export default styles;
