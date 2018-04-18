import React, { Component } from 'react';
import { View } from 'react-native';

import { SearchButtonNavbar } from '../SearchButtonNavbar';
import { ProfileButton } from '../ProfileButton';

import styles from './styles';

export default class RightNavbarButtons extends Component {
  render() {
    const { showSearchButton = true } = this.props;

    return (
      <View style={styles.container}>
        {showSearchButton ? <SearchButtonNavbar /> : null}
        <ProfileButton />
      </View>
    );
  }
}
