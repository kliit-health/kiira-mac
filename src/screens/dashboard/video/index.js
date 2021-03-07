import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {useSelector} from 'react-redux';

import Container from '../../../components/container';
import Section from '../../../components/section';
import Spacer from '../../../components/spacer';
import log from '../../../utils/functions/logger';

function Video({navigation}) {
  const state = useSelector((state) => state.authLoading);
  const width = useWindowDimensions().width / 2;
  const height = useWindowDimensions().height;

  return (
    <Container>
      <Section>
        <View
          style={{
            borderWidth: 2,
            borderColor: '#0089FF',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 36,
              alignItems: 'center',
              justifyContent: 'center',
              color: 'black',
              textAlign: 'center',
            }}>
            Video Left
          </Text>
        </View>
      </Section>
      <Spacer />
      <Section>
        <View
          style={{
            borderWidth: 2,
            borderColor: '#0089FF',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 36,
              alignItems: 'center',
              justifyContent: 'center',
              color: 'black',
              textAlign: 'center',
            }}>
            Video Right
          </Text>
        </View>
      </Section>
    </Container>
  );
}

export default Video;
