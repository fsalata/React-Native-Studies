import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const PhotoListItem = ({ photo, onImagePress }) => (
  <TouchableOpacity onPress={onImagePress}>
    <Image style={styles.image} source={{ uri: photo.thumbnailUrl }} />
  </TouchableOpacity>
);

export default PhotoListItem;
