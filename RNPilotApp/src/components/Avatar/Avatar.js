import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Avatar = ({
  userAvatar = '', onPress, width = 80, height = 80,
}) => (
  <TouchableOpacity onPress={onPress} style={{ width, height }}>
    <View style={styles.roundContainer}>
      {userAvatar === '' ? (
        <Icon name="ios-person" size={width - 7} color="#3069C5" />
      ) : (
        <Image
          source={userAvatar}
          style={{ width, height }}
          resizeMode="cover"
        />
      )}
    </View>
  </TouchableOpacity>
);

export default Avatar;
