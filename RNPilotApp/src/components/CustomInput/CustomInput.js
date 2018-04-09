import React from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from './styles';

const CustomInput = ({
  textValue,
  placeholder,
  onChangeText,
  isSecure,
  errorMessage,
  extraMarginTop,
  floatingLabel = '',
  keyboardType,
}) => (
  <View style={{ marginTop: extraMarginTop }}>
    {floatingLabel !== '' ? <Text style={styles.label}>{floatingLabel}</Text> : null}
    <View style={styles.container}>
      <TextInput
        value={textValue}
        placeholder={placeholder}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        style={styles.input}
        secureTextEntry={isSecure}
        keyboardType={keyboardType}
      />
    </View>
    <Text style={styles.error}>{errorMessage}</Text>
  </View>
);

export default CustomInput;
