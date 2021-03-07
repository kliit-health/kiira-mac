import React, {useState} from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {hasSpecialCharactors} from '../../../../../../../utils/helper';
import {colors, staticImages} from '../../../../../../../utils/constants';
import {changePassword} from '../../../../../../../redux/actions/changePassword';

const ChangePassword = (props) => {
  const lang = useSelector((state) => state.language);

  const dispatch = useDispatch();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [longEnough, setLongEnough] = useState(false);
  const {navigation} = props;

  const renderInputTextView = () => {
    return (
      <View styles={styles.container}>
        <Text style={styles.inputLabel}>Change Password</Text>
        <View style={styles.inputTextContainerStyle}>
          <TextInput
            autoCapitalize="none"
            onChangeText={(value) => setCurrentPassword(value)}
            placeholder={lang.changePassword.currentPassword}
            value={currentPassword}
            secureTextEntry={!showCurrentPassword}
            style={styles.inputTypePasswordStyle}
            placeholderTextColor={colors.black}
          />
        </View>
        <View style={styles.inputTextContainerStyle}>
          <TextInput
            autoCapitalize="none"
            onChangeText={(value) => {
              setNewPassword(value);
              if (value.trim().length >= 7) {
                setLongEnough(true);
              }
              if (hasSpecialCharactors(value)) {
                setHasSpecialChar(true);
              }
            }}
            placeholder={lang.changePassword.newPassword}
            value={newPassword}
            secureTextEntry={!showNewPassword}
            style={styles.inputTypePasswordStyle}
            placeholderTextColor={colors.black}
          />
        </View>
      </View>
    );
  };

  const renderPasswordValidationView = () => {
    return (
      <View>
        <View style={styles.passwordValidationContainerStyle}>
          <Image
            resizeMode="contain"
            source={
              longEnough
                ? staticImages.checkGreenIcon
                : staticImages.checkGreyIcon
            }
            style={styles.passwordValidChecboxIconStyle}
          />
          <Text style={styles.passwordValidationTextStyle}>
            {lang.signUp.passwordCharLimitValidMsg}
          </Text>
        </View>
        <View style={styles.passwordValidationContainerStyle}>
          <Image
            resizeMode="contain"
            source={
              hasSpecialChar
                ? staticImages.checkGreenIcon
                : staticImages.checkGreyIcon
            }
            style={styles.passwordValidChecboxIconStyle}
          />
          <Text style={styles.passwordValidationTextStyle}>
            {lang.signUp.passwordSpecialCharValidMsg}
          </Text>
        </View>
      </View>
    );
  };

  const renderButtonView = () => {
    return (
      <TouchableOpacity
        style={styles.buttonContainerStyle}
        onPress={() => {
          if (!currentPassword.trim()) {
            dispatch(
              showOrHideModal(lang.changePassword.EmptyCurrentPasswordMsg),
            );
          } else if (!newPassword.trim()) {
            dispatch(showOrHideModal(lang.changePassword.EmptyNewPasswordMsg));
          } else if (newPassword.trim().length < 7) {
            dispatch(
              showOrHideModal(lang.changePassword.passwordLimitErrorMsg),
            );
          } else if (!hasSpecialCharactors(newPassword)) {
            dispatch(
              showOrHideModal(lang.changePassword.passwordSpecialCharErrorMsg),
            );
          } else {
            const data = {
              params: {
                newPassword: newPassword.trim(),
                currentPassword: currentPassword.trim(),
              },
              navigation,
            };
            dispatch(changePassword(data));
          }
        }}>
        <Text style={styles.buttonTextStyle}>
          {lang.changePassword.updatePassword}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderInputTextView()}
      {renderPasswordValidationView()}
      {renderButtonView()}
    </View>
  );
};

export default ChangePassword;
