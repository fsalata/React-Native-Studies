import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Avatar } from '../Avatar';

import styles from './styles';

class ProfileButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    try {
      const usersList = await AsyncStorage.getItem('LoggedUser');
      const user = JSON.parse(usersList);

      if (user !== null && user !== '') {
        this.setState({
          user,
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Avatar
          style={styles.button}
          userAvatar={this.state.user ? this.state.user.userPhoto : ''}
          width={30}
          height={30}
          onPress={() => this.props.navigation.navigate('UserProfile')}
        />
      </View>
    );
  }
}

export default withNavigation(ProfileButton);
