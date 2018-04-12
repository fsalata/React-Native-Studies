import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet } from 'react-native';

import { Container } from '../components/Container';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';

import styles from './styles';

const pageStyles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 11,
    marginTop: 5,
    marginLeft: 1,
    textAlign: 'center',
  },
});

export default class UserProfile extends Component {
  logout = async () => {
    try {
      await AsyncStorage.removeItem('LoggedUser');
      this.props.navigation.navigate('Login');
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <Container>
        <View style={styles.screen}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 20,
            }}
          >
            <Avatar touchDisabled />
            {/* <Avatar
            userAvatar={this.state.userPhoto}
            onPress={this.userPhotoHandler}
            width={80}
            height={80}
          /> */}
          </View>
          <View>
            <Text style={pageStyles.title}>Nome</Text>
            <Text style={pageStyles.subtitle}>Email</Text>
            <Text style={pageStyles.subtitle}>CPF</Text>
          </View>
          <Button onPress={this.logout} />
        </View>
      </Container>
    );
  }
}
