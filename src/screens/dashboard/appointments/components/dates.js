import React from 'react';
import {View, Text, FlatList} from 'react-native';
import CustomButton from '../../../../components/customButton';
import {generateDateInfo} from '../../../../utils/helper';
import {colors} from '../../../../utils/constants';

import styles from '../styles';

const Dates = ({dates, selectedDate, setSelectedDate}) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={dates}
      horizontal={true}
      decelerationRate={'fast'}
      extraData={selectedDate}
      renderItem={({item, index}) => {
        item = generateDateInfo(item);
        return (
          <View
            style={{
              height: 100,
              flexDirection: 'column',
              alignItems: 'center',
              margin: 15,
            }}>
            <Text
              style={
                selectedDate === item.date
                  ? {color: colors.blue}
                  : {color: 'black'}
              }>
              {item.month}
            </Text>
            <CustomButton
              buttonStyle={
                selectedDate === item.date
                  ? styles.dateSelectedContainerStyle
                  : styles.dateContainerStyle
              }
              textStyle={
                selectedDate === item.date
                  ? styles.dateSelectedTextStyle
                  : styles.dateTextStyle
              }
              onPress={() => {
                setSelectedDate(item.date);
              }}
              text={item.day}
            />
            <Text
              style={
                selectedDate === item.date
                  ? {color: colors.blue}
                  : {color: 'black'}
              }>
              {item.dow}
            </Text>
          </View>
        );
      }}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default Dates;
