/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {View, Modal, FlatList, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import CustomButton from '../customButton';

const CustomSelectModal = (props) => {
  const [data, setData] = useState(props.data);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('');
  const [dataArr, setDataArr] = useState(data);
  const {onSelection, onClose, showSearch} = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={() => {}}
      visible={true}>
      <View style={styles.modalParentContainer}>
        <View style={styles.modalSelectStateContainer}>
          <FlatList
            data={data}
            ItemSeparatorComponent={() => (
              <View style={styles.saparatorStyle} />
            )}
            ListEmptyComponent={() => (
              <View style={styles.emptyContainerStyle}>
                <Text style={styles.emptyTextStyle}>{'No Data available'}</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.code}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  setSearch('');
                  setSelected(item.value);
                  setData(dataArr);
                  onSelection(item);
                }}
                style={styles.stateTextContainerStyle}>
                <Text style={styles.stateTextStyle}> {item.value} </Text>
              </TouchableOpacity>
            )}
          />
          <CustomButton
            buttonStyle={styles.cancelSelectStateButtonStyle}
            textStyle={styles.cancelSelectStateButtonTextStyle}
            text={'Close'}
            onPress={() => {
              setData(dataArr);
              setSearch('');
              onClose();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomSelectModal;
