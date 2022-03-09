import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../components';
import styles from './styles';

const ResultsScreen = ({ route, navigation }) => {
  const [DATA, setDATA] = useState(
    route.params.results.filter((item) => item.name !== '')
  );
  const [fav, setFav] = useState(false);
  console.log('DATA from route params: ', DATA);

  let icon = true;

  const submitForm = () => {
    navigation.goBack();
  };

  const onFav = () => {
    setFav(!fav);
  };

  const Item = ({ title }) => (
    <View style={styles.item}>
      <TouchableOpacity style={styles.button} onPress={onFav}>
        <View style={styles.rateContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.thumbsUp}>
            {fav && icon && (
              <FontAwesomeIcon
                style={styles.buttonIcon}
                icon={faHeart}
                size={28}
              />
            )}
          </Text>
        </View>
      </TouchableOpacity>
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
