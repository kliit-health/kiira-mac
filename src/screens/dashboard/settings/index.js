import React, {useState} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';
import Container from '../../../components/container';
import ExpertHeader from '../../../components/expertHeader';
import Section from '../../../components/section';
import Profile from './components/profile';
import Availability from './components/availability';
import Terms from './components/terms';
import PrivacyPolicy from './components/privacyPolicy';
import Spacer from '../../../components/spacer';
import Conditional from '../../../components/conditional';
import model from './model';

import styles from './styles';

function Settings() {
  const details = useSelector((state) => state.authLoading.userData);
  const width = useWindowDimensions().width / 2;
  const [activeTab, setActiveTab] = useState('Profile');

  const ListItem = ({item: {destination, title}}) => {
    const isActive = activeTab === destination;

    return (
      <TouchableOpacity
        key={title}
        onPress={() => setActiveTab(destination)}
        style={
          isActive
            ? {...styles.listItem, ...styles.listItemActive, width: width / 2}
            : {...styles.listItem, width: width / 2}
        }>
        <Text
          style={
            isActive
              ? {
                  ...styles.listItemText,
                  ...styles.listItemActiveText,
                }
              : {...styles.listItemText}
          }>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <Section>
        <View style={styles.container}>
          <View style={styles.header}>
            <ExpertHeader title="Settings" />
          </View>
          <FlatList
            data={model}
            renderItem={ListItem}
            keyExtractor={(item) => item.title}
          />
        </View>
      </Section>
      <Spacer />
      <Section>
        <Conditional if={activeTab === 'Profile'}>
          <Profile />
        </Conditional>
        <Conditional if={activeTab === 'Availability'}>
          <Availability />
        </Conditional>
        <Conditional if={activeTab === 'Terms'}>
          <Terms />
        </Conditional>
        <Conditional if={activeTab === 'PrivacyPolicy'}>
          <PrivacyPolicy />
        </Conditional>
      </Section>
    </Container>
  );
}

export default Settings;
