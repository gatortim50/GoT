import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../components';
import styles from './styles';
import ResultsScreen from './Results';

interface IProps {
  title: string;
  updateFavs: Funtion;
}

const Favorite = ({ title, updateFavs }: IProps) => {
  const [fav, setFav] = useState(false);
  useEffect(() => {
    console.log('useEffect fav: ', fav);
  }, [fav]);

  const onFav = () => {
    // console.log(`fav value: ${fav} before calling setFav`);
    let isFav = updateFavs(title);
    console.log(`fav value: ${isFav} AFTER updateFavs`);
    setFav(isFav);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onFav}>
      <View style={styles.rateContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.thumbsUp}>
          {fav && (
            <FontAwesomeIcon
              style={styles.buttonIcon}
              icon={faHeart}
              size={18}
            />
          )}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Favorite;
