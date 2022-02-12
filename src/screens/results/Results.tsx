import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import sortBy from 'lodash/sortBy';
import { Button } from '../../components';
import { Cache } from 'react-native-cache';
import styles from './styles';

const ResultsScreen = ({ route, navigation }) => {
  const [displayList, setDisplayList] = useState(route.params.results);
  console.log('displayList: ', displayList);
  const cache = new Cache({
    namespace: 'lessen',
    policy: {
      maxEntries: 50,
    },
    backend: AsyncStorage,
  });
  let icon = true;

  const submitForm = () => {
    navigation.goBack();
  };

  const sortFav = () => {
    console.log('favorite');
    const sortedByFav = sortBy(displayList, 'thumbs_up').reverse();
    setDisplayList(sortedByFav);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sortContainer}>
        <View style={styles.sortButtonContainer}>
          <Button onPress={sortFav} title={'Sort By favorite'} />
        </View>
      </View>
      {displayList && (
        <FlatList
          data={displayList}
          renderItem={({ item, index }) => (
            <View style={styles.container}>
              <View style={styles.rateContainer}>
                <Text style={styles.thumbsUp}>
                  {item.thumbs_up}
                  {icon && (
                    <FontAwesomeIcon
                      style={styles.buttonIcon}
                      icon={faHeart}
                      size={12}
                    />
                  )}
                </Text>
              </View>

              <View style={styles.resultsContainer}>
                <Text style={styles.defText}>{item.name}</Text>
              </View>
            </View>
          )}
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
