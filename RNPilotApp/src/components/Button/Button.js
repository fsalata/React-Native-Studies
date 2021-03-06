import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default Button;
