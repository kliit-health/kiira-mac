import React, {useState, useEffect, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {loginApi} from '../../redux/actions';

import styles from './styles';

export default function Auth({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secretPassword, setSecretPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const loggedInStatus = useSelector((state) => state.login.loggedIn);

  useEffect(() => {
    setLoggedIn(false);
  }, []);

  const handlePasswordChange = (input) => {
    if (input.length > password.length) {
      setSecretPassword(secretPassword + input.slice(-1));
      setPassword('*'.repeat(input.length));
    } else if (input.length < password.length && input.length > 0) {
      setSecretPassword(secretPassword.slice(0, -1));
      setPassword('*'.repeat(input.length));
    } else {
      setPassword('');
      setSecretPassword('');
    }
  };

  const handleLogin = () => {
    const data = {
      params: {
        email: email.trim(),
        password: secretPassword.trim(),
      },
      navigation,
    };
    dispatch(loginApi(data));
    setLoggedIn(true);
    setPassword('');
    setEmail('');
    setSecretPassword('');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/logo-sm.png')}
      />
      {!loggedInStatus && (
        <Fragment>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(input) => handlePasswordChange(input)}
              value={password}
            />
          </View>
        </Fragment>
      )}

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
