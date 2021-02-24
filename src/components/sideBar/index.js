import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Octicons';
import Pill from 'react-native-vector-icons/MaterialCommunityIcons';
import {signOut} from '../../redux/actions/signOut';
import styles from './styles';

const SideBar = ({children}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut({navigation}));
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <Icon style={styles.icon} name="home" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          style={styles.icon}
          name="comment-discussion"
          size={30}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          style={styles.icon}
          name="device-camera-video"
          size={30}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Pill style={styles.icon} name="pill" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon style={styles.icon} name="gear" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignOut}>
        <Icon style={styles.icon} name="sign-in" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default SideBar;
