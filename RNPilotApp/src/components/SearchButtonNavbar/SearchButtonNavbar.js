import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import styles from './styles';

class SearchButtonNavbar extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Icon name="ios-search" size={30} color="#ccc" />
        </View>
      </TouchableOpacity>
    );
  }
}

export default connect()(SearchButtonNavbar);
