import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import styles from './styles';

const EmployeesListItem = ({
  name,
  username,
  latitude,
  longitude,
  onMapPress,
  onToDoPress,
  onPostsPress,
  onAlbumsPress,
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onMapPress}>
      <MapView
        initialRegion={{
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        liteMode
        zoomEnabled={false}
        zoomControlEnabled={false}
        rotateEnabled={false}
        scrollEnabled={false}
        pitchEnabled={false}
        toolbarEnabled={false}
        style={styles.map}
      >
        <Marker
          coordinate={{
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
          }}
          title={username}
          description={name}
        />
      </MapView>
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
