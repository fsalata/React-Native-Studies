import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const CustomSearch = () => (
  <View style={styles.container}>
    <TextInput style={styles.input} placeholder="Busca..." />
    <TouchableOpacity style={styles.closeIcon}>
      <Icon name="ios-close-circle-outline" size={25} color="#333" />
    </TouchableOpacity>
  </View>
);

export default CustomSearch;
