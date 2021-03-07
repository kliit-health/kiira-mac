import React, {PureComponent} from 'react';
import {colors} from '../../../../../utils/constants';
import {updateExpertHours} from '../../../../../redux/actions/availability';

import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

class Availablity extends PureComponent {
  constructor(props) {
    super(props);
    const {userData} = this.props;
    this.state = {
      clinicInfo: userData.clinicInfo,
      hours: userData.clinicInfo.hours,
    };
  }

  renderHeaderView() {
    const {userData, navigation, lang, updateUserData} = this.props;
    const {clinicInfo, hours} = this.state;
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.titleTextStyle}>Update Availbility</Text>
        <TouchableOpacity
          onPress={() => {
            const payloadData = {
              userParams: {
                userData,
                clinicInfo,
                hours,
              },
              navigation,
            };

            updateUserData(payloadData);
          }}>
          <Text style={styles.doneTextStyle}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderInputTextView() {
    const {hours} = this.state;

    return hours.map((ele, i) => {
      return (
        <View key={ele.day} style={styles.inputTextContainer}>
          <Text style={{marginRight: 5, color: 'black'}}>{ele.day}</Text>
          <View style={styles.inputView}>
            <TextInput
              autoCapitalize="words"
              onChangeText={(value) => {
                const newHours = [...hours];
                const update = {
                  day: ele.day,
                  endTime: ele.endTime,
                  startTime: value,
                };
                newHours[i] = update;
                this.setState({hours: [...newHours]});
              }}
              placeholder={'Start Time'}
              value={ele.startTime}
              style={styles.inputTypeStyle}
              placeholderTextColor={colors.black}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              autoCapitalize="words"
              onChangeText={(value) => {
                const newHours = [...hours];
                const update = {
                  day: ele.day,
                  endTime: value,
                  startTime: ele.startTime,
                };
                newHours[i] = update;
                this.setState({hours: [...newHours]});
              }}
              placeholder={'End Time'}
              value={ele.endTime}
              style={styles.inputTypeStyle}
              placeholderTextColor={colors.black}
            />
          </View>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeaderView()}
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {this.renderInputTextView()}
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
  updateUserData: (value) => dispatch(updateExpertHours(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Availablity);

// TODO: Convert over to PureComponent using useMemo()

// import {
//   View,
//   TouchableOpacity,
//   ScrollView,
//   Text,
//   TextInput,
// } from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import styles from './styles';
// import CustomText from '../../../../components/customText';
// import Constant from '../../../../utils/constants';
// import CustomInputText from '../../../../components/customInputText';
// import KeyboardSpacer from 'react-native-keyboard-spacer';
// import {updateExpertDataToFirebase} from './action';
// import {showOrHideModal} from '../../../../components/customModal/action';

// const Availablity = () => {
//   const dispatch = useDispatch();
//   const userData = useSelector((state) => state.authLoading.userData);
//   const lang = useSelector((state) => state.language);
//   const [clinicInfo, setClinicInfo] = useState(userData.clinicInfo);
//   const [hours, setHours] = useState(userData.clinicInfo.hours);
//   log(hours);

//   const handleInputChange = (value, ele, i) => {
//     const newHours = [...hours];
//     log(newHours);
//     const update = {
//       day: ele.day,
//       endTime: ele.endTime,
//       startTime: value,
//     };
//     newHours[i] = update;
//     log(newHours);
//     setHours({hours: [...newHours]});
//   };

//   const renderHeaderView = () => {
//     return (
//       <View style={styles.headerStyle}>
//         <Text style={styles.titleTextStyle}>Update Availbility</Text>
//         <TouchableOpacity
//           onPress={() => {
//             const payloadData = {
//               userParams: {
//                 userData,
//                 clinicInfo,
//                 hours,
//               },
//             };
//             dispatch(updateExpertHours(payloadData));
//           }}>
//           <Text style={styles.doneTextStyle}>{lang.setting.done}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const renderInputTextView = () => {
//     return hours.map((ele, i) => {
//       return (
//         <View key={ele.day} style={styles.inputTextParentContainerStyle}>
//           <Text style={{marginRight: 5, color: 'black'}}>{ele.day}</Text>
//           <View style={styles.inputView}>
//             <TextInput
//               style={styles.TextInput}
//               placeholder="Start Time"
//               onChangeText={(value) => {
//                 const newHours = [...hours];
//                 const update = {
//                   day: ele.day,
//                   endTime: ele.endTime,
//                   startTime: value,
//                 };
//                 newHours[i] = update;
//                 setHours({hours: [...newHours]});
//               }}
//               value={ele.startTime}
//               style={styles.inputTypeStyle}
//               placeholderTextColor={colors.black}
//             />
//             <TextInput
//               style={styles.TextInput}
//               placeholder="End Time"
//               onChangeText={(value) => {
//                 const newHours = [...hours];
//                 const update = {
//                   day: ele.day,
//                   endTime: ele.endTime,
//                   startTime: value,
//                 };
//                 newHours[i] = update;
//                 setHours({hours: [...newHours]});
//               }}
//               value={ele.endTime}
//               style={styles.inputTypeStyle}
//               placeholderTextColor={colors.black}
//             />
//           </View>
//         </View>
//       );
//     });
//   };

//   return (
//     <View style={styles.container}>
//       {renderHeaderView()}
//       <ScrollView
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}>
//         {renderInputTextView()}
//       </ScrollView>
//     </View>
//   );
// };

// export default Availablity;
