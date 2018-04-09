import React from 'react';
import { Text, View } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

import styles from './styles';

const CustomMaskedInput = ({
  textValue,
  placeholder,
  onChangeText,
  errorMessage,
  extraMarginTop,
  floatingLabel = '',
  mask,
  keyboardType,
}) => (
  <View style={{ marginTop: extraMarginTop }}>
    {floatingLabel !== '' ? <Text style={styles.label}>{floatingLabel}</Text> : null}
    <View style={styles.container}>
      <TextInputMask
        value={textValue}
        placeholder={placeholder}
        // formatted, extracted
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        style={styles.input}
        mask={mask}
        keyboardType={keyboardType}
      />
    </View>
    <Text style={styles.error}>{errorMessage}</Text>
  </View>
);

export default CustomMaskedInput;
