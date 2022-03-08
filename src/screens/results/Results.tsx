import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../components';
import styles from './styles';

const ResultsScreen = ({ route, navigation }) => {
  const [displayList, setDisplayList] = useState(route.params.results);
  const [fav, setFav] = useState(false);
  console.log('displayList from route params: ', displayList);

  let icon = true;

  const submitForm = () => {
    navigation.goBack();
  };

  const onFav = () => {
    setFav(!fav);
    console.log('favorite: ', fav);
  };

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.name} />
  );


  return (
    <View style={styles.container}>
      {displayList && (
        <FlatList
          data={displayList}
          renderItem={renderItem}
          // renderItem={({ item, index }) => (
          //   <View style={styles.container}>
          //     <TouchableOpacity style={styles.button} onPress={onFav}>
          //       <View style={styles.rateContainer}>
          //         <Text style={styles.thumbsUp}>
          //           {item.name}
          //           {icon && (
          //             <FontAwesomeIcon
          //               style={styles.buttonIcon}
          //               icon={faHeart}
          //               size={12}
          //             />
          //           )}
          //         </Text>
          //       </View>
          //     </TouchableOpacity>
          //   </View>
          // )}
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
