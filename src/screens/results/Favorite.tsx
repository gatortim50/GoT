import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';

interface IProps {
  title: string;
  isFavorited: boolean;
  updateFavs: Funtion;
}

const Favorite = ({ title, isFavorited, updateFavs }: IProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => updateFavs(title)}>
      <View style={styles.rateContainer}>
        <Text style={styles.title}>{title}</Text>
        {isFavorited && (
          <FontAwesomeIcon style={styles.buttonIcon} icon={faHeart} size={18} />
        )}
      </View>
    </TouchableOpacity>
  );
};
export default Favorite;
