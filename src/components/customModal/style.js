import {StyleSheet} from 'react-native';
import {text, colors, metrics} from '../../utils/constants';

export default StyleSheet.create({
  innerContainerStyle: {
    borderRadius: 10,
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: colors.white,
  },

  okBtnErrorContainerStyle: {
    width: metrics.width - 100,
    padding: 10,
    backgroundColor: colors.blue,
    marginTop: 15,
    borderRadius: 10,
  },

  okBtnErrorTextStyle: {
    color: colors.white,
    textAlign: 'center',
    fontSize: text.size.regular,
  },

  parentContainerStyle: {
    flex: 1,
    backgroundColor: colors.modalBgSemiTransparentColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    width: metrics.width - 80,
    color: colors.black,
    textAlign: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: text.size.large,
  },
});
