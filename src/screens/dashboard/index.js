import React, {useEffect} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {Calendar} from 'react-native-calendars';
import Container from '../../components/container';
import Section from '../../components/section';
import IsLoadingHOC from '../../hoc/isLoading';
import log from '../../utils/functions/logger';

function Dashboard(setLoading) {
  const all = useSelector((state) => state.termsAndConditions);
  const state = useSelector((state) => state.authLoading);
  const width = useWindowDimensions().width / 2;
  const height = useWindowDimensions().height;

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  return (
    <Container>
      <Section>
        <Calendar
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            height: height,
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'blue',
            indicatorColor: 'blue',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
      </Section>
      <Section>
        <View style={{borderWidth: 5, borderColor: 'black', flex: 1}}>
          <Text
            style={{
              fontSize: 36,
              alignItems: 'center',
              justifyContent: 'center',
              color: 'black',
              textAlign: 'center',
            }}>
            Appointments Right
          </Text>
        </View>
      </Section>
    </Container>
  );
}

export default IsLoadingHOC(Dashboard);
