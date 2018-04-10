import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const PhotoListItem = ({ image, onImagePress }) => (
  <TouchableOpacity onPress={onImagePress}>
    <View>
      <Image style={styles.image} source={image} />
    </View>
  </TouchableOpacity>
);

export default PhotoListItem;
