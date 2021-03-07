import {put, takeEvery, select} from 'redux-saga/effects';
import {
  sendMessage,
  loadMessages,
  checkStatus,
  updateStatus,
  updateReadMessageStatus,
  updateUnreadCount,
  checkQuestionStatus,
  resolvedQuestion,
} from '../../../../utils/firebase';
import {
  loadExpertMessagesSuccess,
  loadExpertMessagesError,
  chatMessageExpertSuccess,
  chatMessageExpertError,
  checkUserStatusSuccess,
  checkQuestionExpertStatusSuccess,
} from '../actions/chat';

import {
  CHAT_MESSAGE_EXPERT_LOADING,
  CHAT_MESSAGE_EXPERT_SENDING,
  CHECK_USER_STATUS,
  TOGGLE_EXPERT_STATUS,
  RESOLVE_QUESTION,
  STOP_OBSERVER_CHAT,
} from '../types';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
let delayTime = 100,
  loadMessagesObserver,
  checkStatusObserver,
  checkQuestionStatusObserver;

function* sendMessageToUser({data}) {
  try {
    const {messageParams, id, lastMessage, questionId} = data;

    const state = yield select();
    const userStatusData = state.chatExpert.userStatusData;
    const userData = state.authLoading.userData;
    const questionData = Object.assign({}, state.chatExpert.questionData);
    var unreadCount = questionData.userUnreadCount
      ? questionData.userUnreadCount
      : 0;
    if (
      userStatusData &&
      userStatusData.isActive &&
      userStatusData.toUserId === userData.uid
    ) {
      messageParams.isRead = true;
    } else {
      unreadCount = unreadCount + 1;
    }
    const params = {
      id,
      messageParams,
      lastMessage,
      questionId,
      unreadCount: {
        userUnreadCount: unreadCount,
      },
    };
    yield sendMessage(params);
    questionData.userUnreadCount = unreadCount;
    const dataResponse = {
      questionData,
    };
    yield put(chatMessageExpertSuccess(dataResponse));
  } catch (error) {
    yield put(chatMessageExpertError());
  }
}
function* loadMessagesOfExpert({data, dispatch}) {
  console.log('LOAD MESSAGES', data);
  try {
    let isFirstTime = true;
    loadMessagesObserver = yield loadMessages(
      data,
      (querySnapshot) => {
        const response = {
          success: true,
          messages: querySnapshot.docs,
        };
        dispatch(loadExpertMessagesSuccess(response.messages));
        if (isFirstTime) {
          const obj = {
            id: data.id,
            key: 'type',
            value: 'User',
          };
          updateReadMessageStatus(obj);
          isFirstTime = false;
        }
      },
      (error) => {
        const {message} = error;
        console.error(error);
        const data = {
          success: false,
          message: message,
        };
        dispatch(loadExpertMessagesError(data.message));
      },
    );
  } catch (error) {
    console.error(error);
  }
}

function* checkUserStatus({data, dispatch}) {
  const lang = yield select((state) => state.language);
  try {
    const {userInfo, questionData} = data;
    checkStatusObserver = yield checkStatus(
      {
        id: userInfo.uid,
      },
      (querySnapshot) => {
        dispatch(checkUserStatusSuccess(querySnapshot.data()));
      },
      (error) => {
        const {message} = error;
        console.error(error);
        const data = {
          success: false,
          message: message,
        };
        dispatch(loadMessagesError(data.message));
      },
    );
    if (questionData) {
      yield delay(delayTime);
      yield checkQuestStatus({data: {questionData}, dispatch});
    }
  } catch (error) {
    console.error(error);
  }
}

function* checkQuestStatus({data, dispatch}) {
  const lang = yield select((state) => state.language);
  try {
    const {questionData} = data;
    checkQuestionStatusObserver = yield checkQuestionStatus(
      {
        id: questionData.questionId,
      },
      (querySnapshot) => {
        dispatch(checkQuestionExpertStatusSuccess(querySnapshot.data()));
      },
      (error) => {
        console.error(error);
      },
    );
  } catch (error) {
    console.error(error);
  }
}

function* toggleExpertStatus({data}) {
  try {
    const {toggleStatusParams, questionData} = data;
    yield updateStatus(toggleStatusParams);
    if (questionData) {
      const params = {
        questionData,
        updateData: {
          expertUnreadCount: 0,
        },
      };
      yield delay(delayTime);
      yield updateUnreadCount(params);
    }
  } catch (error) {
    console.error(error);
  }
}

function* resolveQuestion({data}) {
  try {
    const {resolveQuestionParams, navigation} = data;
    const responseResolvedQuestion = yield resolvedQuestion(
      resolveQuestionParams,
    );

    if (responseResolvedQuestion.success) {
    }
  } catch (error) {
    console.error(error);
  }
}

function* stopObserver() {
  try {
    if (checkQuestionStatusObserver) {
      checkQuestionStatusObserver();
    }
    if (checkStatusObserver) {
      checkStatusObserver();
    }
    if (loadMessagesObserver) {
      loadMessagesObserver();
    }
  } catch (error) {
    console.error(error);
  }
}

export default function* chatExpertSaga() {
  yield takeEvery(CHAT_MESSAGE_EXPERT_LOADING, loadMessagesOfExpert);
  yield takeEvery(CHAT_MESSAGE_EXPERT_SENDING, sendMessageToUser);
  yield takeEvery(CHECK_USER_STATUS, checkUserStatus);
  yield takeEvery(TOGGLE_EXPERT_STATUS, toggleExpertStatus);
  yield takeEvery(RESOLVE_QUESTION, resolveQuestion);
  yield takeEvery(STOP_OBSERVER_CHAT, stopObserver);
}
