import React, {PureComponent} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import ChangePassword from './components/changePassword';
import {connect} from 'react-redux';
import styles from './styles';
import {colors, modal, staticImages} from '../../../../../utils/constants';
import {Picker} from '@react-native-picker/picker';
import {updateExpertProfile} from '../../../../../redux/actions/profile';

//TODO: Convert over to Hooks

class SettingsExpert extends PureComponent {
  constructor(props) {
    super(props);
    const {userData, lang} = this.props;
    this.state = {
      bio: userData.profileInfo.bio,
      city: userData.profileInfo.city,
      clinicInfo: userData.clinicInfo,
      dob: userData.profileInfo.dob,
      email: userData.profileInfo.email,
      filepath: '',
      file: '',
      firstName: userData.profileInfo.firstName,
      gender: userData.profileInfo.gender,
      imageSrc: userData.profileInfo.profileImageUrl,
      imageUri: '',
      languages: userData.profileInfo.languages,
      lastName: userData.profileInfo.lastName,
      license: userData.license,
      location: userData.clinicInfo.name,
      profession: userData.profileInfo.profession,
      profileInfo: userData.profileInfo,
      selectedState: userData.profileInfo.state,
      showIosDateModal: false,
      showSelectStateModal: false,
      showSelectSexualityModal: false,
      states: modal.states,
      pronounsArr: [
        {
          title: lang.addProfileData.sheHer,
          selected:
            userData.profileInfo.pronouns &&
            userData.profileInfo.pronouns === lang.addProfileData.sheHer
              ? true
              : false,
        },
        {
          title: lang.addProfileData.heHim,
          selected:
            userData.profileInfo.pronouns &&
            userData.profileInfo.pronouns === lang.addProfileData.heHim
              ? true
              : false,
        },
        {
          title: lang.addProfileData.theyThem,
          selected:
            userData.profileInfo.pronouns &&
            userData.profileInfo.pronouns === lang.addProfileData.theyThem
              ? true
              : false,
        },
      ],
    };
  }

  isPronounSelected(pronounsArr) {
    let isSelected = false;
    pronounsArr.forEach((element) => {
      if (element.selected) {
        isSelected = true;
      }
    });
    return isSelected;
  }

  getSelectedPronoun(pronounsArr) {
    let selectedValue = '';
    pronounsArr.forEach((element) => {
      if (element.selected) {
        selectedValue = element.title;
      }
    });
    return selectedValue;
  }

  renderHeaderView() {
    const {navigation, showHideErrorModal, updateUserData, lang} = this.props;
    const {
      bio,
      city,
      clinicInfo,
      credits,
      dob,
      email,
      firstName,
      gender,
      languages,
      lastName,
      license,
      location,
      profession,
      profileInfo,
      pronounsArr,
      selectedState,
    } = this.state;
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.titleTextStyle}>My Profile</Text>
        <TouchableOpacity
          onPress={() => {
            if (!firstName.trim()) {
              showHideErrorModal(lang.addProfileData.emptyFirstNameMsg);
            } else if (!lastName.trim()) {
              showHideErrorModal(lang.addProfileData.emptyLastNameMsg);
            } else if (!selectedState) {
              showHideErrorModal(lang.addProfileData.emptyStateSelectionMsg);
            } else if (
              pronounsArr.length > 0 &&
              !this.isPronounSelected(pronounsArr)
            ) {
              showHideErrorModal(lang.addProfileData.emptyPronounsMsg);
            } else {
              const payloadData = {
                userParams: {
                  firstName: firstName.trim(),
                  lastName: lastName.trim(),
                  dob: dob ? dob : '',
                  email: email,
                  gender,
                  pronouns: this.getSelectedPronoun(pronounsArr),
                  state: selectedState,
                  credits,
                  bio,
                  license,
                  location,
                  clinicInfo,
                  profileInfo,
                  city,
                  languages,
                  profession,
                },
                navigation,
              };
              updateUserData(payloadData);
            }
          }}>
          <Text style={styles.doneTextStyle}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderProfileImageView() {
    const {imageSrc} = this.state;
    return (
      <View style={styles.profileImgViewStyle}>
        <Image
          style={{
            width: 120,
            height: 120,
          }}
          resizeMode="stretch"
          source={imageSrc}
        />
      </View>
    );
  }

  renderInputTextView() {
    const {
      bio,
      firstName,
      lastName,
      selectedState,
      states,
      license,
      location,
    } = this.state;
    const {lang} = this.props;

    return (
      <View style={styles.inputTextParentContainerStyle}>
        <View style={styles.inputTextContainer}>
          <View style={styles.inputTextCell}>
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput
              autoCapitalize="words"
              onChangeText={(value) => this.setState({firstName: value})}
              placeholder={lang.addProfileData.firstName}
              value={firstName}
              style={styles.inputTypeStyle}
              placeholderTextColor={colors.black}
            />
          </View>

          <View style={styles.inputTextCell}>
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput
              autoCapitalize="words"
              onChangeText={(value) => this.setState({lastName: value})}
              placeholder={lang.addProfileData.lastName}
              value={lastName}
              style={styles.inputTypeStyle}
              placeholderTextColor={colors.black}
            />
          </View>
        </View>

        <View style={styles.inputTextContainer}>
          <View style={styles.inputTextCell}>
            <Text style={styles.inputLabel}>Location</Text>
            <TextInput
              autoCapitalize="words"
              onChangeText={(value) => this.setState({location: value})}
              placeholder={'Location'}
              value={location}
              style={styles.inputTypeStyle}
              placeholderTextColor={colors.black}
            />
          </View>
          <View style={styles.inputTextCell}>
            <Text style={styles.inputLabel}>License</Text>
            <TextInput
              autoCapitalize="words"
              onChangeText={(value) => this.setState({license: value})}
              placeholder={'License'}
              value={license}
              style={styles.inputTypeStyle}
              placeholderTextColor={colors.black}
            />
          </View>
        </View>
        <View style={{alignSelf: 'center'}}>
          <View style={styles.inputTextBioContainer}>
            <Text style={{...styles.inputLabel, fonstSize: 16}}>Bio</Text>
            <TextInput
              autoCapitalize="words"
              multiline
              onChangeText={(value) => this.setState({bio: value})}
              placeholder={'Bio'}
              value={bio}
              style={styles.inputTypeBio}
              placeholderTextColor={colors.black}
            />
          </View>
        </View>
        <View style={styles.inputTextContainer}>
          <View style={styles.stateDropDownContainerStyle}>
            <Text style={styles.inputLabel}>State</Text>
            <Picker
              style={styles.inputTypeState}
              itemStyle={{width: 200}}
              selectedValue={selectedState}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({selectedState: itemValue})
              }>
              {states.map((item) => (
                <Picker.Item label={item.value} value={item} />
              ))}
            </Picker>
          </View>
        </View>
      </View>
    );
  }

  renderPronounsView() {
    const {pronounsArr} = this.state;
    const {lang} = this.props;
    return (
      <View style={styles.pronounsParentContainerStyle}>
        <Text style={styles.pronounsTitleTextStyle}>
          {lang.addProfileData.pronounsTitle}
        </Text>
        {pronounsArr.map((item, key) => (
          <TouchableOpacity
            key={key}
            onPress={() => {
              pronounsArr.forEach((element, index) => {
                if (element.selected) {
                  pronounsArr[index].selected = false;
                }
              });
              pronounsArr[key].selected = true;
              this.setState({
                pronounsArr: Object.assign([], [], pronounsArr),
              });
            }}>
            <View style={styles.pronounsContainerStyle}>
              <Image
                resizeMode="contain"
                source={
                  item.selected
                    ? staticImages.checkBoxSelectedIcon
                    : staticImages.checkBoxIcon
                }
                style={styles.pronounsChecboxIconStyle}
              />
              <Text style={styles.pronounsTextStyle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeaderView()}
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {this.renderInputTextView()}
          {this.renderPronounsView()}
          <ChangePassword />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.authLoading.userData,
  lang: state.language,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserData: (value) => dispatch(updateExpertProfile(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsExpert);
