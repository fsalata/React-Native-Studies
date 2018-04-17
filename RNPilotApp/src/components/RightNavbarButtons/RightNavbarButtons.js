import React, { Component } from 'react';
import { View } from 'react-native';

import { SearchButtonNavbar } from '../SearchButtonNavbar';
import { ProfileButton } from '../ProfileButton';

import styles from './styles';

export default class RightNavbarButtons extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchButtonNavbar />
        <ProfileButton />
      </View>
    );
  }
}
