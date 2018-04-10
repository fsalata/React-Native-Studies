import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const AlbumListItem = ({ album, onAlbumPress }) => (
  <TouchableOpacity onPress={onAlbumPress}>
    <View style={styles.container}>
      <Text>{album.title} </Text>
    </View>
  </TouchableOpacity>
);

export default AlbumListItem;
