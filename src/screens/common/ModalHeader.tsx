import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default function ModalHeader(props) {
  const { title } = props;
  return (
    <View style={styles.ModalHeader}>
      <Text style={styles.HeaderTitle}>{title}</Text>
    </View>
  );
}
