import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../utils/constants';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.width / 2 - 80,
    paddingVertical: 15,
    backgroundColor: colors.blue,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerText: {
    color: colors.white,
    fontSize: text.size.xxLarge,
    fontFamily: text.fontFamily.poppinsBold,
    fontWeight: '500',
  },

  image: {
    justifyContent: 'flex-start',
    marginRight: 35,
    width: 40,
    height: 40,
  },
});

export default styles;
