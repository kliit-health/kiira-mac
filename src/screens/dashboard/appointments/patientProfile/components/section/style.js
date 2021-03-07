import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../../../utils/constants';

const width = metrics.width / 2;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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

  name: {
    marginLeft: 10,
    fontSize: text.size.medium,
    fontWeight: '500',
  },

  reason: {
    marginTop: 5,
    marginLeft: 10,
    color: colors.black,
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
  },

  info: {
    padding: 20,
  },

  icon: {
    marginLeft: 5,
    width: 20,
    height: 20,
  },

  check: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: 15,
  },
});

export default styles;
