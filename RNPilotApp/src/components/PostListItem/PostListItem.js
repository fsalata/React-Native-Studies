import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const PostListItem = ({ post, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.title}>{post.title} </Text>
      <Text style={styles.body}>{post.body} </Text>
    </View>
  </TouchableOpacity>
);

export default PostListItem;
