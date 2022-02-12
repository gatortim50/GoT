import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Sizes } from '../theme';
const TextButton = (props: any) => {
  const { style, onPress } = props;
  return (
    <TouchableOpacity style={[styles.buttonStyle, style]} onPress={onPress}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    margin: Sizes.Base,
    width: '100%',
    height: Sizes.ButtonHeight,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: Sizes.BodyText,
    color: Colors.Primary,
    textAlign: 'center',
  },
});

export default TextButton;
