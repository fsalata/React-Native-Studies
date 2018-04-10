import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const PhotoListItem = ({ image, onImagePress }) => (
  <TouchableOpacity onPress={onImagePress}>
    <View>
      <Image />
    </View>
  </TouchableOpacity>
);

export default PhotoListItem;
