import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Image, View, TextInput } from 'react-native';
import GetResults from '../../api/API';

import styles from './styles';
import { Button } from '../../components';
import Logo from '../../assets/images/logo.svg';
const URI = 'https://www.lessen.com/';
import ModalWebView from '../common/ModalWebView';

const SearchScreen = ({ navigation }) => {
  const [value, onChangeText] = useState('');
  const [animating, setAnimating] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [viewLessen, setViewLessen] = useState(false);

  const submitForm = () => {
    setAnimating(true);
    // console.log('searching: ', value);
    GetResults(value).then((response) => {
      if (response.data) {
        setAnimating(false);
      }

      onChangeText('');
      // console.log('list: ', response.data);
      if (!Array.isArray(response.data)) {
        response.data = [response.data];
      }
      console.log('GoT Allstars: ', response.data.length);
      navigation.navigate('Results', { results: response.data });
    });
  };

  const submitWebView = () => {
    console.log('webview');
    setViewLessen(!viewLessen);
    setModalVisible(!isModalVisible);
    console.log('set isModalVisible:', isModalVisible);
    console.log('set setViewLessen:', setViewLessen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Logo width={180} height={60} />
      </View>

      {/*<TextInput*/}
      {/*  style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1 }}*/}
      {/*  onChangeText={(text) => onChangeText(text)}*/}
      {/*  value={value}*/}
      {/*/>*/}

      <View style={styles.buttonContainer}>
        <Button onPress={submitForm} title={'Search'} />
      </View>
      {viewLessen && <ModalWebView title={'Lessen'} URI_LINK={URI} />}
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
