import React, { useState } from 'react';
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
  const [fav, setFav] = useState(false);
  console.log('DATA from route params: ', DATA);

  const submitForm = () => {
    navigation.goBack();
  };

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Favorite title={title} />
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
