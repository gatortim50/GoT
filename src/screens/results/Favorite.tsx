import React, { useState } from 'react';
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
  let favArray = new Array<string>(10);
  let icon = true;

  const onFav = () => {
    setFav(!fav);
    if (favArray.includes(title)) {
      favArray.pop(title);
    } else {
      favArray.push(title);
    }
    console.log(title);
    console.log(favArray);
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
