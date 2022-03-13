import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../components';
import Favorite from './Favorite';
import styles from './styles';

const ResultsScreen = ({ route, navigation }) => {
  const [DATA, setDATA] = useState(
    route.params.results.filter((item) => item.name !== '')
  );

  // console.log('DATA from route params: ', DATA);
  const [favArray, setFavArray] = useState([]);
  const [counter, setCounter] = useState(0);
  const MAX = 10;

  const submitForm = () => {
    navigation.goBack();
  };

  const updateFavs = (title) => {
    if (favArray.includes(title)) {
      console.log('remove: ', title);
      for (let i = 0; i < favArray.length; i++) {
        if (favArray[i] === title) {
          favArray.splice(i, 1);
        }
      }
      // const filteredFavorites = favArray.filter((favorite) => favorite.title !== title);
      // setFavArray(filteredFavorites)
      // setCounter(filteredFavorites.length);
      setCounter(favArray.length);
    } else {
      // verify number of favorites is <= max
      if (favArray.length >= MAX) {
        console.log(`Max favorites is ${MAX}`);
      } else {
        // if number of favorites is < max, add new fav
        console.log('add: ', title);
        favArray.push(title);
        setCounter(favArray.length);
      }
    }
    console.log(`favorites: ${favArray.length}`, favArray);
  };

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Favorite
        title={title}
        isFavorited={favArray.includes(title)}
        updateFavs={updateFavs}
      />
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.name} />;

  return (
    <View style={styles.container}>
      {DATA && (
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}

      <View style={styles.resultsButtonContainer}>
        <Button onPress={submitForm} title={'Back'} />
      </View>
    </View>
  );
};

export default ResultsScreen;
