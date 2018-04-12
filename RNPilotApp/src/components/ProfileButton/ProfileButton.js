import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Avatar } from '../Avatar';

import styles from './styles';

class ProfileButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar
          style={styles.button}
          width={20}
          height={20}
          onPress={() => this.props.navigation.navigate('UserProfile')}
        />
      </View>
    );
  }
}

export default withNavigation(ProfileButton);
