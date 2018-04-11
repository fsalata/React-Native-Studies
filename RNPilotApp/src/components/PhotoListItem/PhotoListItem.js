import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const PhotoListItem = ({ photo, onImagePress }) => (
  <TouchableOpacity onPress={onImagePress}>
    <View>
      <Image style={styles.image} source={{ uri: photo.thumbnailUrl }} />
    </View>
  </TouchableOpacity>
);

export default PhotoListItem;
