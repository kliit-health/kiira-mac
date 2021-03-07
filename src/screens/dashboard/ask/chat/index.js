import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Platform,
  Image,
  Modal,
  AppState,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';
import {staticImages, colors} from '../../../../utils/constants';
import InputText from '../../../../components/customInputText/simpleInputText';
import MessageContainer from './MessageContainer';
import {
  loadExpertMessages,
  sendMessageExpert,
  setQuestionExpertData,
  clearChatExpertState,
  checkUserStatus,
  toggleExpertStatus,
  resolveQuestion,
  stopObserverChat,
} from '../../../../redux/actions/chat';
import {getChatItems} from './selectors';
import moment from 'moment';
import CustomButton from '../../../../components/customButton';
import topics from './model';

let key;
class Chat extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      showActionModal: false,
      appState: AppState.currentState,
      imageUri: '',
      name: '',
      filename: '',
      path: '',
      rating: 0,
    };
  }

  initStatus(status) {
    const {questionData, toggleStatus, userData} = this.props;
    const payloadToggleStatus = {
      userInfo: userData,
      toggleStatusParams: {
        uid: userData.uid,
        updatedData: {
          isActive: status,
          toUserId:
            questionData && questionData.userInfo.uid
              ? questionData.userInfo.uid
              : '',
        },
      },
      questionData,
    };
    toggleStatus(payloadToggleStatus);
  }

  async componentDidMount() {
    const {loadUserMessages, questionData, setId, checkStatus} = this.props;

    this.initStatus(true);
    const payloadCheckStatus = {
      userInfo: questionData.userInfo,
      questionData,
    };
    checkStatus(payloadCheckStatus);
    const payloadData = {
      id: questionData.messageId,
    };
    const ids = {
      messageId: questionData.messageId,
      questionId: questionData.questionId,
      questionData,
    };
    setId(ids);
    console.log('PAYLOAD', payloadData);
    loadUserMessages(payloadData);
  }

  componentWillUnmount() {
    const {clearState, stopObervers} = this.props;
    clearState();
    this.initStatus(false);
    stopObervers();
  }

  handleButtonPress() {
    const {sendMessageUser, messageId, questionId} = this.props;
    const {message, imageUri, filename, path} = this.state;
    var encrypted = '';
    var payloadData = {};
    // rsa.setPublicString(JSON.parse(key.publicKey));
    if (message && imageUri) {
      // encrypted = rsa.encrypt(message);
      payloadData = {
        questionId,
        id: messageId,
        lastMessage: message,
        messageParams: {
          // text: encrypted,
          text: message,
          type: 'Expert',
          createdAt: moment().unix(),
          questionId: '',
          isRead: false,
          image: '',
        },
        imageParams: {
          file: Platform.OS == 'ios' ? imageUri : path,
          filename,
        },
      };
    } else if (message) {
      // encrypted = rsa.encrypt(message);
      // encrypted = message;
      payloadData = {
        questionId,
        id: messageId,
        lastMessage: message,
        messageParams: {
          // text: encrypted,
          text: message,
          type: 'Expert',
          createdAt: moment().unix(),
          questionId: '',
          isRead: false,
          image: '',
        },
      };
    } else if (imageUri) {
      payloadData = {
        questionId,
        id: messageId,
        lastMessage: 'Sent a image',
        messageParams: {
          text: '',
          type: 'Expert',
          createdAt: moment().unix(),
          questionId: '',
          isRead: false,
          image: '',
        },
        imageParams: {
          file: Platform.OS == 'ios' ? imageUri : path,
          filename,
        },
      };
    }
    sendMessageUser(payloadData);
    this.setState({
      message: '',
      imageUri: '',
      name: '',
      filename: '',
      path: '',
    });
  }

  renderHeaderView() {
    const {questionData} = this.props;

    return (
      <View style={styles.headerStyle}>
        <View style={styles.profileHeaderStyle}>
          <Image
            containerStyle={{alignSelf: 'center'}}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
            }}
            source={{uri: questionData.userInfo.profileInfo.profileImageUrl}}
            activeOpacity={0.7}
          />
          <Text style={styles.titleTextStyle}>
            {`${questionData.userInfo.profileInfo.firstName} ${questionData.userInfo.profileInfo.lastName}`}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            opacity: questionData && questionData.isResolved ? 0 : 100,
          }}
          onPress={() => {
            this.setState({
              showActionModal: true,
            });
          }}>
          <Image
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode="contain"
            source={staticImages.menuDotIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }

  renderFooterView() {
    const {message, imageUri} = this.state;
    const {lang} = this.props;
    return (
      <View style={styles.chatInputParentContainer}>
        <View style={styles.chatInputContainer}>
          <View style={styles.textContainerStyle}>
            <InputText
              maxHeight={100}
              multiline={true}
              autoCapitalize="sentences"
              onChangeText={(value) => {
                this.setState({
                  message: value,
                });
              }}
              placeholder={lang.chat.enterMsg}
              value={message}
              style={styles.textInputStyle}
              placeholderTextColor={colors.lightGrey}
            />
            <TouchableOpacity
              style={styles.sendButtonContainerStyle}
              onPress={() => (message || imageUri) && this.handleButtonPress()}>
              <Image
                style={{
                  width: 28,
                  height: 28,
                }}
                resizeMode="contain"
                source={staticImages.sendIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  renderResolvedFooterView() {
    const {lang} = this.props;
    return (
      <View style={styles.resolvedParentContainer}>
        <Text style={styles.resovledTextStyle}>
          {lang.chat.resolvedConversationMsg}
        </Text>
      </View>
    );
  }
  renderMessageList(item, index, datamessage) {
    return (
      <MessageContainer
        item={item}
        index={index}
        lastIndex={datamessage.length}
        textkey={key}
      />
    );
  }

  renderMessageView() {
    const {messages} = this.props;
    console.log('MESSAGES', messages);
    const datamessage = getChatItems(messages);
    return (
      <FlatList
        ref={(ref) => {
          this.flatList = ref;
        }}
        data={datamessage}
        style={{paddingBottom: 10}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) =>
          this.renderMessageList(item, index, datamessage)
        }
        inverted={true}
      />
    );
  }

  renderActionModal() {
    const {showActionModal} = this.state;
    const {questionData, resolve, navigation, lang} = this.props;

    const resolveQuestionByCategory = (topic) => {
      this.setState({
        showActionModal: false,
      });
      const questionRef = Object.assign({}, questionData);
      questionRef.isResolved = true;
      questionRef.resolvedDate = moment().unix();
      questionRef.isRated = false;
      questionRef.category = topic;
      const payloadData = {
        resolveQuestionParams: questionRef,
        navigation,
      };
      resolve(payloadData);
    };

    return (
      <Modal
        animationType="fade"
        onRequestClose={() => {}}
        transparent
        isVisible={showActionModal}>
        <View style={styles.actionModalParentContainerStyle}>
          <View style={styles.actionModalInnerContainerStyle}>
            <Text style={styles.actionModalTitleTextStyle}>
              {'Resolve question by topic:'}
            </Text>
            {topics.map(({title}) => (
              // <View key={title} style={styles.actionModalLineSeperator}>
              <TouchableOpacity
                onPress={() => {
                  resolveQuestionByCategory(title);
                }}>
                <Text style={styles.actionModalBlueTextStyle}>{title}</Text>
              </TouchableOpacity>
              // </View>
            ))}
          </View>
          <CustomButton
            buttonStyle={styles.actionModalOkBtnErrorContainerStyle}
            textStyle={styles.actionModalOkBtnErrorTextStyle}
            text={lang.chat.cancel}
            onPress={() => {
              this.setState({
                showActionModal: false,
              });
            }}
          />
        </View>
      </Modal>
    );
  }

  render() {
    const {questionData} = this.props;
    const {showActionModal} = this.state;
    console.log(questionData.isResolved);
    return (
      <View style={styles.parentContainer}>
        {this.renderHeaderView()}
        {this.renderMessageView()}
        <Image
          source={require('../../../../../assets/construction.png')}
          style={{height: 250, width: 250, alignSelf: 'center'}}
          resizeMode="contain"
        />
        {questionData && questionData.isResolved
          ? this.renderResolvedFooterView()
          : this.renderFooterView()}
        {showActionModal ? this.renderActionModal() : null}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.authLoading.userData,
  messages: state.chat.messages,
  messageId: state.chat.messageId,
  questionId: state.chat.questionId,
  // questionData: state.chat.questionData,
  userStatusData: state.chat.userStatusData,
  isActive: state.authLoading.isActive,
  lang: state.language,
});

const mapDispatchToProps = (dispatch) => ({
  loadUserMessages: (value) => dispatch(loadExpertMessages(value, dispatch)),
  sendMessageUser: (value) => dispatch(sendMessageExpert(value)),
  setId: (value) => dispatch(setQuestionExpertData(value)),
  clearState: () => dispatch(clearChatExpertState()),
  checkStatus: (value) => dispatch(checkUserStatus(value, dispatch)),
  toggleStatus: (value) => dispatch(toggleExpertStatus(value)),
  resolve: (value) => dispatch(resolveQuestion(value)),
  stopObervers: () => dispatch(stopObserverChat()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
