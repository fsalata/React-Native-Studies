import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const EmployeesListItem = ({
  name,
  username,
  latitute,
  longitude,
  onMapPress,
  onToDoPress,
  onPostsPress,
  onAlbumsPress,
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onMapPress}>
      <View style={styles.map} />
    </TouchableOpacity>

    <View>
      <Text style={styles.title}> {name} </Text>
      <Text style={styles.subtitle}> {username} </Text>
    </View>

    <View style={styles.linksContainer}>
      <TouchableOpacity onPress={onToDoPress}>
        <Text style={styles.links}>To dos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPostsPress}>
        <Text style={styles.links}>Posts</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onAlbumsPress}>
        <Text style={styles.links}>Albums</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default EmployeesListItem;
