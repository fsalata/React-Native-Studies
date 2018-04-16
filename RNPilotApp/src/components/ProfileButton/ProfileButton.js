import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import { Avatar } from '../Avatar';

import styles from './styles';

class ProfileButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar
          style={styles.button}
          userAvatar={this.props.user ? this.props.user.userPhoto : ''}
          width={30}
          height={30}
          onPress={() => this.props.navigation.navigate('UserProfile')}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;

  return {
    user,
  };
};

export default connect(mapStateToProps)(withNavigation(ProfileButton));
