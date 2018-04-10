import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const ToDoListItem = ({ todo, bgColor = '#fff' }) => (
  <View style={[styles.container, { backgroundColor: bgColor }]}>
    <Text>ID: {todo.id} </Text>
    <Text>Titulo: {todo.title} </Text>
  </View>
);

export default ToDoListItem;
