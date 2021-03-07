import React from 'react';
import {View, Image, Linking, Text} from 'react-native';
import moment from 'moment';
import HTML from 'react-native-render-html';
import {staticImages, metrics, app} from '../../../../utils/constants';
import styles from './style';

class MessageContainer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  renderView(item, index, key, lastIndex) {
    item = item.data();
    if (item.type === 'Expert' || item.type === 'expert') {
      return index === lastIndex - 1 ? (
        <View>
          <View style={styles.rowLeftParentContainerStyle}>
            <View style={styles.rowLeftContainerStyle}>
              <View style={styles.staticTextContainerStyle}>
                <HTML
                  onLinkPress={(evt, href) => {
                    Linking.openURL(href);
                  }}
                  containerStyle={{
                    overflow: 'hidden',
                  }}
                  html={app.disclaimerTextForChat}
                  baseFontStyle={styles.staticTextStyle}
                />
              </View>
            </View>
          </View>
          <View style={styles.rowRightParentContainerStyle}>
            <View style={styles.rowRightContainerView}>
              {item.text ? (
                <Text numberOfLines={0} style={styles.messagesRightTextStyle}>
                  {item.text}
                </Text>
              ) : null}
              {item.image ? (
                <Image
                  style={{
                    height: metrics.width / 2 - 100,
                    width: metrics.width / 2 - 100,
                    resizeMode: 'cover',
                  }}
                  source={{
                    uri: item.image,
                  }}
                />
              ) : null}
              <View style={styles.dateContainerStyle}>
                <Text numberOfLines={0} style={styles.dateTextStyle}>
                  {moment.unix(item.createdAt).fromNow(true)}
                </Text>
                <Image
                  style={{
                    width: 18,
                    height: 18,
                  }}
                  resizeMode="contain"
                  source={
                    item.isRead
                      ? staticImages.readMsgIcon
                      : staticImages.unreadMsgIcon
                  }
                />
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.rowRightParentContainerStyle}>
          <View style={styles.rowRightContainerView}>
            {item.text ? (
              <Text numberOfLines={0} style={styles.messagesRightTextStyle}>
                {item.text}
              </Text>
            ) : null}
            {item.image ? (
              <Image
                style={{
                  height: metrics.width / 2 - 100,
                  width: metrics.width / 2 - 100,
                  resizeMode: 'cover',
                }}
                source={{
                  uri: item.image,
                }}
              />
            ) : null}
            <View style={styles.dateContainerStyle}>
              <Text numberOfLines={0} style={styles.dateTextStyle}>
                {moment.unix(item.createdAt).fromNow(true)}
              </Text>
              <Image
                style={{
                  width: 18,
                  height: 18,
                }}
                resizeMode="contain"
                source={
                  item.isRead
                    ? staticImages.readMsgIcon
                    : staticImages.unreadMsgIcon
                }
              />
            </View>
          </View>
        </View>
      );
    } else if (item.type === 'User' || item.type === 'user') {
      return index === lastIndex - 1 ? (
        <View>
          <View style={styles.rowLeftParentContainerStyle}>
            <View style={styles.rowLeftContainerStyle}>
              <View style={styles.staticTextContainerStyle}>
                <HTML
                  onLinkPress={(evt, href) => {
                    Linking.openURL(href);
                  }}
                  containerStyle={{
                    overflow: 'hidden',
                  }}
                  html={app.disclaimerTextForChat}
                  baseFontStyle={styles.staticTextStyle}
                />
              </View>
            </View>
          </View>
          <View style={styles.rowLeftParentContainerStyle}>
            <View style={styles.rowLeftContainerStyle}>
              {item.text && item.createdAt ? (
                <Text numberOfLines={0} style={styles.messagesLeftTextStyle}>
                  {item.text}
                </Text>
              ) : !item.image && item.text ? (
                <View style={styles.staticTextContainerStyle}>
                  <HTML
                    onLinkPress={(evt, href) => {
                      Linking.openURL(href);
                    }}
                    containerStyle={{
                      overflow: 'hidden',
                    }}
                    html={app.disclaimerTextForChat}
                    baseFontStyle={styles.staticTextStyle}
                  />
                </View>
              ) : null}
              {item.image ? (
                <Image
                  style={{
                    height: metrics.width / 2 - 100,
                    width: metrics.width / 2 - 100,
                    resizeMode: 'cover',
                  }}
                  source={{
                    uri: item.image,
                  }}
                />
              ) : null}
              {item.createdAt ? (
                <View style={styles.dateContainerStyle}>
                  <Text numberOfLines={0} style={styles.dateTextStyle}>
                    {moment.unix(item.createdAt).fromNow(true)}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.rowLeftParentContainerStyle}>
          <View style={styles.rowLeftContainerStyle}>
            {item.text && item.createdAt ? (
              <Text numberOfLines={0} style={styles.messagesLeftTextStyle}>
                {/* {rsa.decrypt(item.text)} */}
                {item.text}
              </Text>
            ) : !item.image && item.text ? (
              <View style={styles.staticTextContainerStyle}>
                <HTML
                  onLinkPress={(evt, href) => {
                    Linking.openURL(href);
                  }}
                  containerStyle={{
                    overflow: 'hidden',
                  }}
                  html={app.disclaimerTextForChat}
                  baseFontStyle={styles.staticTextStyle}
                />
              </View>
            ) : null}
            {item.image ? (
              <Image
                style={{
                  height: metrics.width / 2 - 100,
                  width: metrics.width / 2 - 100,
                  resizeMode: 'cover',
                }}
                source={{
                  uri: item.image,
                }}
              />
            ) : null}
            {item.createdAt ? (
              <View style={styles.dateContainerStyle}>
                <Text numberOfLines={0} style={styles.dateTextStyle}>
                  {moment.unix(item.createdAt).fromNow(true)}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
      );
    }
  }
  render() {
    const {item, index, textkey, lastIndex} = this.props;
    return this.renderView(item, index, textkey, lastIndex);
  }
}

export default MessageContainer;
