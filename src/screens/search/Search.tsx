import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Image, View, TextInput } from 'react-native';
import GetResults from '../../api/API';

import styles from './styles';
import { Button } from '../../components';
import Images from '../../constants/images';
const URI = 'https://www.lessen.com/';
import ModalWebView from '../common/ModalWebView';

const SearchScreen = ({ navigation }) => {
  const [value, onChangeText] = useState('');
  const [animating, setAnimating] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [appointment, setAppointment] = useState(false);

  const submitForm = () => {
    setAnimating(true);
    // console.log('searching: ', value);
    GetResults(value).then((response) => {
      if (response.data) {
        setAnimating(false);
      }

      onChangeText('');
      console.log('list: ', response.data);
      if (!Array.isArray(response.data)) {
        response.data = [response.data];
      }
      console.log('number of items: ', response.data.length);
      navigation.navigate('Results', { results: [response.data] });
    });
  };

  const submitWebView = () => {
    console.log('webview');
    setAppointment(!appointment);
    setModalVisible(!isModalVisible);
    console.log('set isModalVisible:', isModalVisible);
    console.log('set appointment:', appointment);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Images.logo} />
      </View>

      <TextInput
        style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={submitForm} title={'Search'} />
      </View>
      {appointment && <ModalWebView title={'Lessen'} URI_LINK={URI} />}
      <View style={styles.buttonContainer}>
        <Button onPress={submitWebView} title={'View Lessen'} />
      </View>
      <ActivityIndicator
        animating={animating}
        color="#bc2b78"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SearchScreen;
