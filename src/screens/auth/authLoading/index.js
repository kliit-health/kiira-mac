/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ActivityIndicator} from 'react-native';
import {getUserData} from '../../../utils/firebase';
import {displayConsole} from '../../../utils/helper';
import {setUserData, setFcmToken} from '../../../redux/actions/authLoading';
import {FirebaseContext} from '../../../firebase';

class AuthLoadingScreen extends Component {
  static contextType = FirebaseContext;

  async componentDidMount() {
    this.initNavigation();
  }

  initNavigation() {
    const firebase = this.context;
    const {navigation, setData, userData} = this.props;
    const user = firebase.auth().currentUser;

    if (user && user.uid) {
      try {
        const obj = {
          tableName: 'users',
          uid: user.uid,
        };

        getUserData(
          obj,
          (querySnapshot) => {
            const data = querySnapshot.data();
            if (!userData && isFirstTime) {
              if (data && data.profileInfo) {
                setData(data);
                if (data.role == 'Expert') {
                  navigation.navigate('DashboardStack');
                }
              }
            }
          },
          (error) => {
            console.log(error);
          },
        );
      } catch (error) {
        displayConsole('getUserData  error ', error);
      }
    }
  }

  render() {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.authLoading.userData,
  fcmToken: state.authLoading.fcmToken,
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setUserData(data)),
  setToken: (value) => dispatch(setFcmToken(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
