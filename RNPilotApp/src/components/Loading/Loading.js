import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

import styles from './styles';

const Loading = () => (
  <View style={styles.container}>
    <View style={styles.loadingContainer}>
      <ActivityIndicator style={styles.loading} />
      <Text>Carregando...</Text>
    </View>
  </View>
);

export default Loading;
