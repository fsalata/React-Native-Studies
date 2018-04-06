import React from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from './styles';

const LoginInput = ({
  textValue,
  placeholder,
  onChangeText,
  isSecure,
  errorMessage,
  extraMarginTop,
}) => (
  <View style={{ marginTop: extraMarginTop }}>
    <View style={styles.container}>
      <TextInput
        value={textValue}
        placeholder={placeholder}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        style={styles.input}
        secureTextEntry={isSecure}
      />
    </View>
    <Text style={styles.error}>{errorMessage}</Text>
  </View>
);

export default LoginInput;
