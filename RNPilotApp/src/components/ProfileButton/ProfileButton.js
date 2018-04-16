import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import { Avatar } from '../Avatar';

import styles from './styles';

class ProfileButton extends Component {
  render() {
    const photoURI = this.props.user.userPhotoURI
      ? { uri: this.props.user.userPhotoURI }
      : '';

    return (
      <View style={styles.container}>
        <Avatar
          style={styles.button}
          userAvatar={photoURI}
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
