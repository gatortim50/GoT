import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Colors, Sizes, Fonts } from '../theme';

const Button = (props: any) => {
  const { title, icon = false, onPress, style } = props;
  return (
    <TouchableOpacity
      style={[localStyles.buttonStyle, style]}
      onPress={onPress}
    >
      <Text style={localStyles.buttonText}>
        {title ? title : props.children}
      </Text>
      {icon && (
        <FontAwesomeIcon
          style={localStyles.buttonIcon}
          icon={faLock}
          size={14}
        />
      )}
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    margin: Sizes.Base,
    backgroundColor: Colors.Primary,
    borderRadius: Sizes.ButtonHeight / 2,
    height: Sizes.ButtonHeight,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: Sizes.BodyText,
    color: Colors.White,
    textAlign: 'center',
    padding: 5,
  },
  buttonIcon: {
    color: Colors.White,
    marginLeft: Sizes.Base / 2,
  },
});

export default Button;
