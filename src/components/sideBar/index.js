import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';
import Pill from 'react-native-vector-icons/MaterialCommunityIcons';
import Conditional from '../conditional';
import {signOut} from '../../redux/actions/signOut';
import model from './model';
import styles from './styles';

const SideBar = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const screen = useSelector(
    (state) => state.authLoading.appScreen.currentRouteName,
  );

  const handleSignOut = () => {
    dispatch(signOut({navigation}));
  };

  const handleNavigation = (destination) => {
    navigation.navigate(destination);
  };

  return (
    <View style={styles.root}>
      {model.map((item) => (
        <TouchableOpacity
          key={item.title}
          onPress={() => handleNavigation(item.title)}>
          <Conditional if={item.icon !== 'pill'}>
            <Icon
              style={screen === item.title ? styles.iconActive : styles.icon}
              name={item.icon}
              size={item.size}
              color={item.color}
            />
          </Conditional>
          <Conditional if={item.icon === 'pill'}>
            <Pill
              style={screen === item.title ? styles.iconActive : styles.icon}
              name={item.icon}
              size={item.size}
              color={item.color}
            />
          </Conditional>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={handleSignOut}>
        <Icon style={styles.icon} name="sign-in" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default SideBar;
