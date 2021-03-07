import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    minHeight: 180,
  },
  avatarContainer: {
    position: 'absolute',
    zIndex: 100,
    marginTop: 20,
  },
  detailsContainer: {
    margin: 20,
  },
  background: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    shadowOpacity: 0.1,
    flex: 1,
  },
});
