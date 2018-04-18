import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { toggleSearch } from '../../actions/search';

import styles from './styles';

class SearchButtonNavbar extends Component {
  handleButtonPress = () => {
    this.props.dispatch(toggleSearch());
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handleButtonPress}>
        <View style={styles.container}>
          <Icon name="ios-search" size={30} color="#ccc" />
        </View>
      </TouchableOpacity>
    );
  }
}

export default connect()(SearchButtonNavbar);
