import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../../../utils/constants';

const width = metrics.width / 2;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderColor: '#2196F3',
    borderWidth: 2,
    borderRadius: 20,
    padding: 5,
    elevation: 2,
    width: 100,
    marginTop: 5,
    marginRight: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  container: {
    flex: 1,
  },

  detailsContainer: {
    flexDirection: 'column',
  },

  image: {
    marginRight: 5,
    width: 60,
    height: 60,
    borderRadius: 50,
  },

  info: {
    padding: 20,
  },

  infoContainer: {
    flexDirection: 'row',
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
    marginTop: 20,
    marginBottom: 20,
  },

  name: {
    marginLeft: 10,
    fontSize: text.size.medium,
    fontWeight: '500',
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

  reason: {
    marginTop: 5,
    marginLeft: 10,
    color: colors.black,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  noVisitsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  noVisits: {
    color: colors.black,
    fontSize: text.size.xxxxxLarge,
  },
});

export default styles;
