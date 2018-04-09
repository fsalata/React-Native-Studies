import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Avatar = ({ userAvatar, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.roundContainer}>
      {userAvatar === '' ? (
        <Icon name="ios-person" size={80} color="#3069C5" />
      ) : (
        <Image
          source={{
            uri: userAvatar,
          }}
          style={{ width: 90, height: 90 }}
          resizeMode="contain"
        />
      )}
    </View>
  </TouchableOpacity>
);

export default Avatar;
