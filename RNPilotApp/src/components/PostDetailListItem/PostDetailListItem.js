import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const PostDetailListItem = ({ comment }) => (
  <View style={styles.container}>
    <Text style={styles.name}>Nome: {comment.name} </Text>
    <Text style={styles.email}>E-mail: {comment.email} </Text>
    <Text style={styles.body}>{comment.body} </Text>
  </View>
);

export default PostDetailListItem;
