import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../../../../utils/constants';

const width = metrics.width / 2;

let parentPaddingValue = width * 0.05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  expertDetailsCard: {
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 13, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10, //IOS
    elevation: 2, // Android
  },

  expertIsOffline: {
    width: 18,
    height: 18,
    top: 40,
    left: 20,
    borderRadius: 8,
    backgroundColor: colors.gray,
    position: 'absolute',
  },

  expertIsOnline: {
    width: 18,
    height: 18,
    top: 40,
    left: 20,
    borderRadius: 8,
    backgroundColor: colors.green,
    position: 'absolute',
  },

  expertIsPrescriber: {
    flexDirection: 'row',
    marginTop: metrics.height * 0.01,
    marginLeft: width * 0.15,
  },

  expertImage: {
    bottom: -140,
    left: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
  },

  expertImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    zIndex: 1,
    elevation: 2,
  },

  expertName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: metrics.height * 0.05,
    marginLeft: width * 0.15,
  },

  expertNameTextStyle: {
    color: colors.black,
    fontSize: text.size.xLarge,
    fontWeight: '700',
    fontFamily: text.fontFamily.poppinsRegular,
    marginTop: 5,
  },

  expertPrescriberImage: {
    width: 20,
    height: 20,
  },

  expertPrescriberTextStyle: {
    color: colors.blue,
    marginLeft: 10,
    marginBottom: 15,
  },

  expertProfession: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: width * 0.15,
  },

  expertProfessionTextStyle: {
    fontSize: text.size.large,
    color: colors.blueGrey,
  },

  expertNameTextStyle: {
    flex: 1,
    marginTop: metrics.height * 0.01,
    fontSize: text.size.Large,
    fontFamily: text.fontFamily.poppinsRegular,
  },

  expertRatingImage: {
    width: 20,
    height: 20,
    padding: 5,
  },

  expertRatingTextStyle: {
    fontSize: text.size.large,
    color: colors.blueGrey,
  },

  firstAvaliable: {
    fontSize: text.size.medium,
    marginTop: 10,
    alignSelf: 'center',
  },

  firstAvaliableContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: 'grey',
    paddingLeft: 50,
    paddingRight: 50,
    alignSelf: 'center',
  },

  myRecentExpertContainerStyle: {
    flexDirection: 'column',
    marginTop: metrics.height * 0.03,
    marginBottom: metrics.height * 0.03,
    paddingLeft: parentPaddingValue + 4,
    paddingRight: (parentPaddingValue + 4) * 0.5,
    backgroundColor: 'white',
    flex: 1,
    width: 320,
    height: 200,
    borderRadius: 15,
  },
});

export default styles;
