import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../components';
import styles from './styles';
import ResultsScreen from './Results';

interface IProps {
  title: string;
  itemId: number;
}

const Favorite = ({ title, itemId }: IProps) => {
  const [fav, setFav] = useState(false);
  const [favArray, setFavArray] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`change to ${counter}`);
  }, [counter]);

  let LEN = 0;
  const MAX = 10;
  let icon = true;

  const onFav = () => {
    setFav(!fav);
    console.log(title);
    if (favArray.includes(title)) {
      console.log('TRUE contains:', title);
      setCounter(counter - 1);
    } else {
      console.log('FALSE add:', title);
      setFavArray(title);
      setCounter(counter + 1);
    }
    // console.log(counter);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onFav}>
      <View style={styles.rateContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.thumbsUp}>
          {fav && icon && (
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
